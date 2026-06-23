import { createHash } from "node:crypto";

// Vercel serverless function: adds an email to the Mailchimp audience and tags it.
// Secrets live only here (server-side), never in the client bundle.
//   MAILCHIMP_API_KEY      e.g. "abc123...-us21"  (datacenter is the suffix after the dash)
//   MAILCHIMP_AUDIENCE_ID  the list ID
const WAITLIST_TAG = "Android Waiting List";

const isEmail = (value: unknown): value is string =>
  typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    return res.status(500).json({ error: "Mailchimp is not configured." });
  }

  // Vercel parses JSON bodies automatically, but fall back to manual parse just in case.
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const email = (body?.email ?? "").toString().trim().toLowerCase();
  if (!isEmail(email)) {
    return res.status(400).json({ error: "A valid email is required." });
  }

  const dc = apiKey.split("-")[1];
  if (!dc) {
    return res.status(500).json({ error: "Invalid Mailchimp API key." });
  }

  const auth = "Basic " + Buffer.from(`anystring:${apiKey}`).toString("base64");
  const subscriberHash = createHash("md5").update(email).digest("hex");
  const base = `https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

  try {
    // Upsert the member. status_if_new keeps existing subscribers untouched (idempotent).
    const upsert = await fetch(base, {
      method: "PUT",
      headers: { Authorization: auth, "Content-Type": "application/json" },
      body: JSON.stringify({ email_address: email, status_if_new: "subscribed" }),
    });

    if (!upsert.ok) {
      const detail = await upsert.json().catch(() => ({}));
      console.error("Mailchimp upsert failed:", upsert.status, detail);
      return res.status(502).json({ error: "Could not join the waitlist right now." });
    }

    // Apply the waitlist tag (best-effort — don't fail the signup if tagging hiccups).
    const tagRes = await fetch(`${base}/tags`, {
      method: "POST",
      headers: { Authorization: auth, "Content-Type": "application/json" },
      body: JSON.stringify({ tags: [{ name: WAITLIST_TAG, status: "active" }] }),
    });
    if (!tagRes.ok) {
      console.error("Mailchimp tag failed:", tagRes.status, await tagRes.text().catch(() => ""));
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Waitlist handler error:", err);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
