import { createHash } from "node:crypto";

// Vercel serverless function: adds an email to the Mailchimp audience and tags it.
// Secrets live only here (server-side), never in the client bundle.
//   MAILCHIMP_API_KEY      e.g. "abc123...-us21"  (datacenter is the suffix after the dash)
//   MAILCHIMP_AUDIENCE_ID  the list ID
const WAITLIST_TAG = "Android Waiting List";

// Branded confirmation email. Inline styles + table layout for email-client compatibility.
// The logo is served as a static file from public/ (stable URL, unlike the bundled asset).
const confirmationEmailHtml = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
            <tr>
              <td align="center" style="padding:40px 32px 0 32px;">
                <img src="https://sifat.app/sifat-logo.png" alt="Sifat" width="72" height="72" style="display:block;border:0;width:72px;height:auto;" />
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:24px 32px 8px 32px;">
                <h1 style="margin:0;font-size:22px;line-height:1.3;color:#0f172a;font-weight:700;">You're on the list!</h1>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:0 32px 40px 32px;">
                <p style="margin:0;font-size:16px;line-height:1.6;color:#475569;">
                  We'll email you the moment <strong style="color:#3B82F6;">Sifat</strong> launches on Android. Thanks for your patience.
                </p>
              </td>
            </tr>
          </table>
          <p style="margin:24px 0 0 0;font-size:12px;color:#94a3b8;">Sifat &middot; Learn the Names of Allah</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

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

    // Send a confirmation email via Resend (best-effort — never block the signup).
    // No de-duping: a repeat submit from the same email gets another confirmation.
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Sifat <support@sifat.app>",
          to: email,
          subject: "You're on the list",
          text: "You're on the Sifat Android waitlist. We'll email you the moment Sifat launches on Android.",
          html: confirmationEmailHtml,
        }),
      });
      if (!emailRes.ok) {
        console.error("Resend email failed:", emailRes.status, await emailRes.text().catch(() => ""));
      }
    } else {
      console.error("RESEND_API_KEY not set — skipping confirmation email.");
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Waitlist handler error:", err);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
