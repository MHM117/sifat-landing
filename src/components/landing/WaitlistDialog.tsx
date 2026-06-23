import { useState, type ReactNode } from "react";
import { z } from "zod";
import { Loader2, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import AndroidIcon from "@/components/landing/AndroidIcon";

const emailSchema = z.string().trim().email();

type Status = "idle" | "loading" | "success";

const WaitlistDialog = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      // Reset after the close animation so the form doesn't flicker on the way out.
      setTimeout(() => {
        setEmail("");
        setStatus("idle");
        setError(null);
      }, 200);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: parsed.data }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-sm border-white/15 bg-background/80 backdrop-blur-xl shadow-2xl">
        {/* Soft Android-green glow behind the panel */}
        <div className="pointer-events-none absolute -top-16 left-1/2 -z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-[#3DDC84]/20 blur-3xl" />

        {status === "success" ? (
          <div className="flex flex-col items-center text-center py-4 animate-fade-up">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3DDC84]/15">
              <Check className="h-7 w-7 text-[#3DDC84]" strokeWidth={2.5} />
            </div>
            <DialogTitle className="mt-5 text-xl font-bold">You're on the list! 🎉</DialogTitle>
            <DialogDescription className="mt-2 text-base">
              We'll email you the moment Sifat lands on Android.
            </DialogDescription>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3DDC84]/15">
              <AndroidIcon className="h-7 w-7 text-[#3DDC84]" />
            </div>

            <DialogTitle className="mt-5 text-xl font-bold">Be the first to know</DialogTitle>
            <DialogDescription className="mt-2 text-base">
              Sifat is coming to Android. Drop your email and we'll let you know the
              moment it's ready — no spam, ever.
            </DialogDescription>

            <form onSubmit={handleSubmit} className="mt-6 w-full space-y-3">
              <div className="space-y-1.5 text-left">
                <Input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  autoFocus
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  disabled={status === "loading"}
                  aria-invalid={!!error}
                  className="h-12 bg-background/60 text-center text-base"
                />
                {error && <p className="px-1 text-sm text-destructive">{error}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-base font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Joining…
                  </>
                ) : (
                  "Notify me"
                )}
              </button>
            </form>

            <p className="mt-3 text-xs text-muted-foreground">Unsubscribe anytime.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
