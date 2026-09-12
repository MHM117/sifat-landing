# Session Summary

## Current state (2026-09-12)

- **Reviews strip added.** New `Reviews.tsx` between Hero and Hadith — compact strip (py-12, border-t, no heading) with 3 real App Store reviews (Noor A., Anonymous, Mohammad B.). Each card has stars, bold title, quote text, and author. Cards support an optional `title` field for future reviews. Carousel upgrade planned when more reviews accumulate.
- **Section backgrounds fixed.** Alternating white/grey pattern from Hadith downward: Hadith (grey) → HowItWorks (white) → StepsToValue (grey) → Features (white) → Pricing (grey) → FairPricing (grey, pulled tight against Pricing) → FAQ (white) → SpecialThanks (white, pulled tight against FAQ) → Download (blue) → Footer (card).
- **Blue pill eyebrows trimmed.** Removed from StepsToValue, Pricing, and FAQ. Kept on Features, FairPricing ("Our Approach"), and SpecialThanks only — reduces the AI-template look.
- **Privacy Policy updated (September 2026).** Added leaderboard scores/streaks to Usage Data; changed purchase language to reflect freemium model; added leaderboard visibility bullet to Section 5; added Stripe to third-party services.
- **Terms of Service updated (September 2026).** Purchases section now distinguishes iOS (App Store, Apple refund policy) from Android (Stripe, all purchases final, contact support for issues). Added Google Play platform-specific terms section. Added Privacy Policy link.

## Where things live
- `src/components/landing/Reviews.tsx` — review cards strip between Hero and Hadith.
- `src/components/landing/Hero.tsx` — carousel, dark mode toggle, social proof line, store badges.
- `src/components/landing/Download.tsx` — bottom CTA section with store badges.
- `src/pages/Privacy.tsx` — privacy policy.
- `src/pages/Terms.tsx` — terms of service.
- `src/components/landing/AndroidWaitlistButton.tsx` + `WaitlistDialog.tsx` — preserved, no longer imported.

## Open, next time
- **Reviews: carousel upgrade.** When more reviews accumulate, convert the 3-card grid into a sliding carousel.
- Toggle position needs fine-tuning on mobile viewports.
- Image file sizes are large (~5.8 MB total for 10 mockups) — WebP conversion or lazy loading worth considering.
- Column widths in `/names` table grid still untuned.
- Detail pages at `/names/:slug` still pending.
