# Session Summary

## Current state (2026-08-07)
- **Hero dark mode toggle is in progress.** Carousel expanded from 3 to 5 slides (home, flashcard, list, journal, guide) with light/dark pairs (10 images total). A sun/moon toggle sits top-right of the phone. Theme auto-alternates each full cycle; clicking the toggle kills auto-flip and gives manual control. All changes are in `Hero.tsx` only.
- **Uncommitted:** Hero.tsx changes, 10 new/replaced mockup images in `src/assets/`, old smaller mockups replaced.
- **Also uncommitted from prior session:** the search rework (`src/lib/name-search.ts`, `src/data/names.ts`, `scripts/generate-names.mjs`, `src/components/names/NamesList.tsx`).

## Decisions made this session
- **Sun/moon toggle over crossfade or interleave.** Brainstormed four approaches; toggle won for being clean and non-jarring. Auto-flip after each cycle was added so passive visitors still see dark mode.
- **Auto-flip is tied to the carousel wrap**, not a separate timer. When the last slide advances back to the first, the theme flips. This means clicking through slides still triggers the flip at the right boundary. Only the toggle button kills auto-cycling permanently.
- **Icon reflects current state** (Sun = light showing, Moon = dark showing), not the action it will take.
- **Guide slide goes last.** Order: home, flashcard, list, journal, guide.

## Struggles worth remembering
- **List mockup files were swapped at the source.** `list_mockup.png` was the dark screenshot and vice versa. Had to swap filenames after noticing the list was the wrong theme vs the other 4 slides. Always verify image content against filename for each pair.
- **Separate auto-flip timer broke on user interaction.** First implementation used a fixed `setInterval` for the theme flip, independent of the carousel timer. Clicking slides called `resetTimer()` which restarted the carousel counter, putting it out of sync with the auto-flip timer. Fixed by tying the theme flip to the carousel's own wrap-around (`next === 0`).
- **Key-based image swap killed transitions.** First attempt used `key={isDark ? "dark" : "light"}` which unmounted/remounted the `<img>`, skipping the CSS transition entirely. Fixed by rendering both light and dark images permanently and toggling visibility via opacity.

## Where things live
- `src/components/landing/Hero.tsx` — carousel + toggle, all logic in one file.
- `src/assets/` — 10 mockup PNGs (`{name}_mockup.png` + `{name}_mockup_dark.png`), 1419x2796 with device frames and alpha.

## Open, next time
- **Toggle position needs fine-tuning on mobile viewports** — currently `top-8 -right-10`, may need responsive adjustment.
- **Image file sizes are large** (~550-620 KB each, 10 images = ~5.8 MB total). Worth considering WebP conversion or lazy loading for the non-active slides.
- Column widths in `/names` table grid are still untuned.
- Detail pages at `/names/:slug` still pending.
