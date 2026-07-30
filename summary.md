# Session Summary

## Current state (2026-07-30)
- **`/names` "Explore the Names" is live on sifat.app.** 99 Tirmidhi, 98 Ibn al-Uthaymeen, 128 unique Names across both.
- **The Android waitlist is finally deployed.** It had been committed since June but never pushed, so it was never live; `origin/main` sat at `fcb471e2` the whole time. The Resend DNS was never the blocker. Worth one real submit through the live form to confirm Mailchimp tagging and the confirmation email, since `api/waitlist.ts` has still never been exercised in production.
- **Uncommitted:** the search rework. `src/lib/name-search.ts` (new), plus `src/data/names.ts`, `scripts/generate-names.mjs` and `src/components/names/NamesList.tsx`.

## Where things live
- `src/pages/Names.tsx` — a real route, not a homepage anchor. Header and Footer, centred h1, the 7:180 ayah in a tinted panel below it, the table, a CTA to `/#download`.
- `src/components/names/NamesList.tsx` — search and compilation state, sticky control bar, empty state.
- `src/components/names/NameRow.tsx` — 4-column grid row sharing the exported `NAMES_GRID` template with the header row, so labels cannot drift out of alignment with the data.
- `src/lib/name-search.ts` — all search logic. Deliberately **not** in `names.ts`, which is generated and would overwrite it.
- `src/data/names.ts` — **generated, data only.** Source of truth is `names_tirmidhi.md` and `names_ibn_uthaymeen.md` at the repo root. Regenerate with `node scripts/generate-names.mjs`, which refuses to write on non-sequential ids, duplicate slugs or empty cells. Never hand-edit the arrays.
- `src/hooks/use-document-meta.ts` — zero-dependency per-page title, description, canonical and og tags, restored on unmount.

## Decisions that constrain future work
- **Git is Hussain's alone.** Never run `push`, `commit`, `add`, `rm`, `reset`, `stash`, `merge`, `rebase` or branch/tag commands. Do not write commit messages for him either. Leave work uncommitted and describe it. Full rule is in the Git section of CLAUDE.md.
- **Search mirrors the iOS app** (`lib/Screens/list_screen.dart` in the app repo): plain substring on transliteration or meaning, apostrophes stripped, no reordering. Mid-word matching is the point, so "yy" finds AL-QAWIYY. A looser pass (separators dropped, doubles collapsed, ee/i and oo/u folded, Arabic marks stripped) runs **only when that pass finds nothing**, so anything the app finds behaves identically here. It needs 3+ folded letters, or "zzzz" collapses to "z" and matches anything with a z.
- **Header nav uses `<Link to="/#features">`, not `<a href="#features">`.** Page-relative anchors resolve to `/names#features` and silently do nothing off the homepage. Do not revert.
- **Row numbers come from `name.id`, never the filtered index**, so searching cannot renumber a Name.
- **Detail pages get revealed one at a time** via `hasDetail` per Name. Until it is true the row shows no chevron and no hover, so it never implies a link that goes nowhere. Slugs are already in the data for `/names/:slug`.
- **`--primary-deep` token** (`217 91% 45%` light, `217 92% 68%` dark, in `tailwind.config.ts`). Use it for text on primary tints; plain `text-primary` on `bg-primary/10` measures 2.51:1 and fails.
- **Screen reader work is out of scope** at Hussain's direction. Contrast, touch targets and keyboard reachability were still done.
- Avoided `prose` (the typography plugin is installed but never registered in `tailwind.config.ts`, so those classes are inert), `py-20`, `max-w-6xl` and `md:` heading breakpoints.

## Struggles worth remembering
- **The page shipped rendering completely empty, and I called it verified.** `useScrollReveal` fired at `threshold: 0.15`, but IntersectionObserver measures visible area as a fraction of the whole element, so a ~6000px section in an 800px window peaks at 13% and never qualified. The section sat at `opacity: 0` forever; Header and Footer showed because they are outside it. Fixed by clamping the threshold to a reachable ratio in the hook, and by wrapping only the intro in the reveal so the table never depends on an observer to be visible. **Lesson: `npm run build` passing is not verification.** Three placeholder rows hid this entirely; it only appeared at 99. Open the page.
- **Search was rewritten three times.** Substring over a concatenated row was too loose ("alee" returned 23, "noor" matched "The Governor"). Prefix-per-token was then too strict, which Hussain caught: "yy" found nothing. The resolution was to stop inventing and go read the app's own filter, which is plain substring but keeps hyphens, so `ali` never gets the chance to match `malik`. Mirroring the product beat both of my designs.
- **Editing Arabic string literals by exact match is unreliable.** Bidirectional reordering made the edit tool fail repeatedly. Part of why the data file is generated.
- **The repo had no `.gitignore`**, so 19,935 of 20,100 tracked files were `node_modules`, plus committed `dist/` and 13 iCloud duplicate files like `vercel 2.json`. Now 140 tracked files. History was left alone deliberately.
- Running the design audit **before** the content landed was the right call: it caught the numbering bug and the contrast failures while they were cheap. Worth repeating on the detail pages.
- The quote and table each took several passes: quote moved above then below the h1, table gained dividers and a header row, Arabic right-aligned, then the standing subtitle and empty-state subtext were trimmed back to just "No Names found".

## Known limitations, accepted for now
- **No Arabic webfont.** Zero fonts are loaded, so the Arabic falls through to the OS: Geeza Pro or SF Arabic on Apple, Segoe UI or Tahoma on Windows, Noto Naskh Arabic on Android. The most important column renders differently for every visitor. Amiri or Scheherazade New would fix it and place the harakat more precisely.
- **SEO ceiling.** Client-rendered SPA with no prerender. Google runs JS and reads the meta, but other crawlers and social scrapers see the homepage tags in the raw HTML.
- **`--input` border is 1.27:1.** Raising it to 3:1 means darkening a global token that also styles the waitlist dialog, so it is a site-wide call for Hussain.
- `send.sifat.app` has no MX record. Resend wants one for bounce handling; sending works on DKIM plus SPF.

## Open, next time
- Column widths in `NAMES_GRID` are untuned: `1.1fr / 1fr / 1.5fr` for Name / Transliteration / Meaning. The Name column looks wide for its content while Transliteration wraps. Now judgeable with all 99 rows on screen.
- Detail pages at `/names/:slug`. The data and row component are already shaped for them.
