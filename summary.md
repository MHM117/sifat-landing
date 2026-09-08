# Session Summary

## Current state (2026-09-09)
- **Android is live.** Replaced the Android waitlist button with the real Google Play badge linking to `https://play.google.com/store/apps/details?id=app.sifat.android` in both Hero.tsx and Download.tsx. Waitlist code (AndroidWaitlistButton, WaitlistDialog) kept intact — imports commented out, JSX commented out — ready to reactivate if needed.
- **StoreBadges.tsx** also updated: both App Store and Google Play `href="#"` placeholders replaced with real store links.
- **Social proof line added to Hero.** "Trusted by Hundreds of Muslims worldwide" sits between the subtitle and the store badges. Styled as `text-lg sm:text-xl`, semibold, with "Hundreds of Muslims" in brand blue (`text-primary`). Alignment matches the hero's responsive pattern (`text-center lg:text-left`).
- **Uncommitted:** All of the above, plus prior uncommitted work from earlier sessions (Hero carousel dark mode toggle, 10 mockup images, search rework).

## Decisions made this session
- **"Hundreds" over "500+".** Discussed inflating the user count (200-300 actual) to 500+ but agreed "hundreds" is honest, sounds substantial, and ages well.
- **Copy choice:** "Trusted by Hundreds of Muslims worldwide" — capitalised H on Hundreds for intentional emphasis.
- **Styling (G4):** Brainstormed six initial options (A-F), then four E+F combos (G1-G4). Picked G4 — bold weight + blue highlight, no decorative rules — because rules would introduce a visual language foreign to the rest of the hero.

## Where things live
- `src/components/landing/Hero.tsx` — carousel, dark mode toggle, social proof line, store badges.
- `src/components/landing/Download.tsx` — bottom CTA section with store badges.
- `src/components/landing/StoreBadges.tsx` — reusable badge pair (not currently used on any page but now has real links).
- `src/components/landing/AndroidWaitlistButton.tsx` + `WaitlistDialog.tsx` — preserved, no longer imported.

## Open, next time
- Toggle position needs fine-tuning on mobile viewports.
- Image file sizes are large (~5.8 MB total for 10 mockups) — WebP conversion or lazy loading worth considering.
- Column widths in `/names` table grid still untuned.
- Detail pages at `/names/:slug` still pending.
