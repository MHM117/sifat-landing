# Session Summary

## Current state
- **`/names` "Explore the Names" page is complete and unpushed.** Full content in: 99 Tirmidhi, 98 Ibn al-Uthaymeen, 128 unique Names across both. Build and lint pass.
- `src/data/names.ts` is **generated**. Source of truth is `names_tirmidhi.md` and `names_ibn_uthaymeen.md` at the repo root. Regenerate with `node scripts/generate-names.mjs`. Never hand-edit the arrays.
- Android waitlist shipped to main (`89716592`). Still outstanding: confirm Resend DNS verified on Namecheap, then test the live submit end to end on sifat.app.

## 2026-07-29/30 — Explore the Names page

### What we built
- **`/names` route** (`src/pages/Names.tsx`) — a real page, not a homepage anchor. Header + Footer, centred h1, the 7:180 ayah in a tinted panel below it, the table, then a CTA to `/#download`.
- **`NamesList.tsx`** — search and compilation state, sticky control bar, generated result count, empty state.
- **`NameRow.tsx`** — a 4-column grid row (number, Arabic, transliteration, meaning) sharing the exported `NAMES_GRID` template with the header row, so labels can never drift out of alignment with the data.
- **`use-document-meta.ts`** — zero-dependency per-page title, description, canonical and og tags, restored on unmount.
- **`scripts/generate-names.mjs`** — parses the markdown into the data file, refusing to write on non-sequential ids, duplicate slugs or empty cells.

### Decisions that constrain future work
- **Header nav uses `<Link to="/#features">`, not `<a href="#features">`.** Page-relative anchors resolve to `/names#features` and silently do nothing off the homepage. Do not revert. `Index.tsx` handles the hash on arrival.
- **Search matches per word by prefix, never as a substring of the whole row.** Do not revert to substring matching, see struggles below.
- **Row numbers come from `name.id`, never the filtered index**, so searching cannot renumber a Name.
- **Detail pages are revealed one at a time** via the `hasDetail` flag per Name. Until it is true a row shows no chevron and no hover, so it never implies a link that goes nowhere. Slugs are already in the data for `/names/:slug`.
- **`--primary-deep` token** (`217 91% 45%` light, `217 92% 68%` dark, registered in `tailwind.config.ts`). Exists because `text-primary` on `bg-primary/10` measured 2.51:1; it is now 5.46:1. Use it for text on primary tints.
- **Screen reader work is deliberately out of scope** at Hussain's explicit direction. Other accessibility fixes were done: contrast, 40px touch targets in a 48px track, keyboard reachability.
- Avoided `prose` (the typography plugin is installed but never registered in `tailwind.config.ts`, so those classes are inert), `py-20`, `max-w-6xl` and `md:` heading breakpoints. None are used in this codebase.

### Struggles worth remembering
- **Substring search collapsed under real data.** With 3 placeholders it looked perfect. At 197 rows, "alee" returned 23 results because `ali` matched inside `almalik`, and "noor" matched "The Governor" via `guvirnur`. Fixed by tokenising per word and prefix-matching; "alee" now returns 3 genuinely related Names. Also indexes Arabic words with and without the ال article.
- **Editing Arabic string literals by exact match is unreliable** — bidirectional reordering made the edit tool fail repeatedly on the regex character classes. This is part of why the data file is generated rather than hand-maintained.
- The design audit was run deliberately **before** the content landed, on the reasoning that layout problems are cheap to fix at 3 rows and expensive at 99. It caught the numbering bug and the contrast failures early. Worth repeating on the detail pages.
- The quote and the table both took several passes on look: quote moved above then below the h1, table gained column dividers and a header row to stop rows reading as floating text, Arabic right-aligned to its own reading edge.

### Known limitations, both accepted for now
- **No Arabic webfont.** Zero fonts are loaded, so the Arabic falls through to whatever the OS provides: Geeza Pro or SF Arabic on Apple, Segoe UI or Tahoma on Windows, Noto Naskh Arabic on Android. The most important column renders differently for every visitor. Amiri or Scheherazade New would fix it, and would place the harakat more precisely.
- **SEO ceiling.** This is a client-rendered SPA with no prerender. Google runs JS and reads the meta, but other crawlers and social scrapers see the homepage tags in the raw HTML. Real fix is prerendering, deferred until the page is worth ranking.
- **`--input` border sits at 1.27:1.** Raising it to 3:1 means darkening a global token that also styles the waitlist dialog, so it was left as a site-wide decision for Hussain rather than changed unilaterally.

### Open, next time
- Column widths in `NAMES_GRID` are untuned. Currently `1.1fr / 1fr / 1.5fr` for Name / Transliteration / Meaning; the Name column looks wide for its content while Transliteration wraps. Worth adjusting now that all 99 rows are visible.
