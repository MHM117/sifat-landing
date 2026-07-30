# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing site for **Sifat**, an iOS app for memorising the 99 Names of Allah through spaced-repetition flashcards. The site is a single-page marketing site with a few legal/support pages. Live at **sifat.app**, deployed on Vercel.

The app is currently iOS-only (App Store link in Hero). Android is "Coming Soon."

## Commands

```bash
npm run dev      # Start dev server on port 8080
npm run build    # Production build (outputs to dist/)
npm run lint     # ESLint
npm run preview  # Preview production build locally
```

No test framework is configured.

## Architecture

**Stack:** React 18 + TypeScript, Vite (SWC), Tailwind CSS, shadcn/ui (Radix primitives), React Router v6. Deployed on Vercel with SPA catch-all rewrite.

**Routing:** `App.tsx` defines all routes — `/` (Index), `/privacy`, `/terms`, `/contact`, and a `*` catch-all (NotFound). No nested routing.

**Landing page composition:** `pages/Index.tsx` assembles the homepage from section components in `components/landing/` in a fixed order: Header → Hero → Hadith → HowItWorks → StepsToValue → Features → Pricing → FAQ → SpecialThanks → Download → Footer. Each section uses an `id` attribute for hash-based smooth scrolling from the nav.

**Path alias:** `@/` maps to `src/` (configured in both vite.config.ts and tsconfig.json).

**Design system:** Colors are defined as HSL CSS custom variables in `index.css` with light/dark mode variants. The theme is blue-primary (`#60A5FA` / `#3B82F6`). All color tokens follow the shadcn/ui convention (`--primary`, `--secondary`, `--muted`, etc.) and are consumed via Tailwind's `hsl(var(--token))` pattern in `tailwind.config.ts`.

**Custom animations:** `index.css` defines utility classes for fade-up (staggered delays), float, pulse-subtle, and 3D flip-card transforms. These are plain CSS `@keyframes` in the `@layer utilities` block, not Tailwind config extensions.

**shadcn/ui:** Uses the `default` style with `slate` base color and CSS variables enabled. Components live in `components/ui/`. Add new ones with `npx shadcn-ui@latest add <component>`.

## Session Continuity

`summary.md` tracks what we're currently working on — update it with a few lines when starting or shifting tasks, so work can resume if the session drops. Read it at the start of a new session.

## Git

**Never run `git push`. Pushing is the user's job alone, with no exceptions.**

This is not a "ask first" rule, it is a "do not do it" rule. Do not push even if
explicitly asked, even if the user says to go ahead, and even if you just made
the commits yourself. Pushing this repo triggers a Vercel deploy to the live
site at sifat.app, so it is the user's call and his hands only. If a task seems
to need a push, stop, say the commits are ready, and let him run it.

Also do not run anything else that writes to the remote: `git push --force`,
`git push --tags`, deleting or creating remote branches, `gh pr merge`, or
`vercel deploy` / `vercel --prod`.

**Do not commit either.** `git commit`, `git add`, `git rm`, `git restore
--staged`, `git reset`, `git stash`, `git merge`, `git rebase`, `git
cherry-pick`, `git checkout -b` and `git tag` are all the user's to run. He
wants sole control of the repo's history, not just its remote.

Leave finished work as uncommitted changes in the working tree and say what
changed and why. Do not stage, do not commit, do not offer to, and **do not
write commit messages for him** — he writes his own. He will say so explicitly
if he ever wants any of that changed for a specific task.

Read-only commands are always fine and encouraged for diagnosis: `git status`,
`git log`, `git diff`, `git show`, `git fetch`, `git ls-files`, `git blame`.

## Key Details

- Pricing is in GBP (£) — monthly £1.99, yearly £11.99 (launch discount).
- Support email: support@sifat.app
- App Store link: `https://apps.apple.com/us/app/sifat-learn-names-of-allah/id6758858851`
- `lovable-tagger` in devDependencies is a Lovable platform artifact; it tags components in dev mode only.
- ESLint has `@typescript-eslint/no-unused-vars` turned off.
