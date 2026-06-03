# Session Summary

## 2026-06-03

### What we did
- Switched pricing model from subscription (monthly/yearly) to one-time purchase (£7.99) with a free tier
- Rewrote `Pricing.tsx`: OTP hero card, Free vs Premium comparison table (Flashcards, Quizzes, Custom Study, Challenges, Names Explorer, Dua Journal, Audio), Get Started CTA
- Created new `FairPricing.tsx` section ("Fair Pricing & No Tricks"): hero card comparing to physical books (up to £30), two cards ("Built to be Completed" + "No subscriptions"), future decks footnote
- Added FairPricing to page composition in `Index.tsx` between Pricing and FAQ
- Small content tweaks: Step 1 description to "Get the app", renamed "Dua Helper" to "Dua Journal" with new copy, commented out launch discount badge
- Used visual brainstorming companion (localhost server) to iterate on mockups before coding

### Design decisions
- Split layout chosen: Pricing section (card + table) separate from justification section (Fair Pricing & No Tricks)
- Price hero + table layout chosen over side-by-side tier cards
- No em dashes in any copy
- "Names Explorer" chosen as the name for the list mode feature

### Next up
- Revise FAQs to reflect new pricing model and features
- Update privacy policy and terms pages
- Further design revamps across the landing page
