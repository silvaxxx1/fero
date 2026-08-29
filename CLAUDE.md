# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interactive birthday celebration website (SPA) built with Vite + vanilla TypeScript. No framework — pure TypeScript, HTML, and CSS. Deployed to GitHub Pages at `silvaxxx1/fero`. Features countdown timer, animated love letters (Arabic/English), photo/video galleries, and consent-gated content.

## Commands

```bash
npm run dev           # Dev server at http://localhost:3000 (hot reload)
npm run build         # Production build with base path /
npm run build:github  # Production build with base path /fero/ (GitHub Pages)
npm run preview       # Preview production build locally
npm run deploy        # build:github + publish to GitHub Pages via gh-pages
```

No test or lint scripts are configured.

## Architecture

**Entry point:** `index.html` → `src/enhanced-main.ts`

```
src/
  enhanced-main.ts        # Main orchestrator (~810 lines); initializes all features on DOMContentLoaded
  enhanced-features.ts    # Mouse effect and surprise box helpers
  enhanced-style.css      # All styles (~789 lines); animations, RTL Arabic support, glass-morphism
  app/
    enhanced-birthday.ts  # Countdown to Aug 31 + typing animation for love letter messages
    romantic-effects.ts   # Background effects: floating love notes, cursor hearts, heart sky
public/
  assets/
    images/   # 6 JPEG photos
    videos/   # 4 MP4 files
    audio/    # 1 MP3 background track
    spicy/    # 5 consent-gated romantic media items
```

Each `.ts` file has a parallel `.js` file for compatibility; TypeScript is the source of truth.

## Key Patterns

**Asset paths:** Use `getAssetPath(path)` helper in `enhanced-main.ts` — it prepends the Vite base path (`/` in dev, `/fero/` in production). Always use this for any `public/assets/` references.

**Base path:** Controlled by `vite.config.js` via `NODE_ENV`. `build:github` sets `NODE_ENV=production`, which switches the base to `/fero/`. Local `build` uses `/`. This affects all asset URLs and links.

**Bilingual content:** English for UI chrome; Arabic for love letters, gallery captions, and memory notes. Arabic elements use `direction: rtl` and the font stack: Amiri → Scheherazade → Arabic Typesetting.

**Consent gate:** The spicy section renders a full-overlay consent prompt first. Accept/decline both trigger animations but only accept reveals the content.

**Animation cleanup:** Dynamically created DOM elements (hearts, confetti particles) call `.remove()` on `animationend` to avoid unbounded DOM growth.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) auto-deploys on push to `main` by running `npm run deploy`, which publishes the `dist/` directory to the `gh-pages` branch. The remote is `git@github.com:silvaxxx1/fero.git`.

## Design Context

### Users
**Audience**: One person — Fero, the creator's romantic partner. This is a private gift, not a public product. She opens it on or around her birthday (August 31) and likely views it alone or with the creator present. She is Arabic-speaking (Egyptian dialect), probably on a mobile phone or laptop.

**Job to be done**: Make her feel seen, adored, and delighted — not impressed by technical capability. The site is a love letter in interface form.

### Brand Personality
**Three words**: Playful, Dreamy, Sophisticated

**Emotional goal**: The feeling you get when someone makes you laugh and takes your breath away at the same time. Giddy but not silly. Surprising but never overwhelming.

**Anti-references**: NOT generic pink party site (floating hearts, emoji soup, gradients). NOT corporate/sterile. NOT kitschy/tacky (effects over emotion).

### Aesthetic Direction
**Visual tone**: Dreamy Editorial — Vogue Arabia meets a handmade birthday card. Magazine sophistication with the warmth of something made by hand, just for one person.

**Theme**: Light mode. Warm cream base (not clinical white), soft peach/dusty rose accents, one deep contrasting color for editorial weight.

**Color direction**: oklch-based palette. Warm cream surface, dusty rose secondary, terracotta or deep plum accent. Avoid cyan, teal, neon pink, pink-to-teal gradients.

**Typography direction**: Distinctive editorial display font (Gloock, Young Serif, or equivalent — NOT anything from the impeccable banned list). Clean modern body font. Amiri for Arabic. Never system fonts.

### Design Principles
1. **Playful sophistication** — every animated/decorative element earns its place through meaning, not motion for its own sake.
2. **Editorial breathing room** — generous whitespace lets emotional moments land; not every section competes for attention.
3. **Arabic as a design feature** — love letters set large, dignified, in real white space — the emotional core, not an afterthought.
4. **Surprise over saturation** — one unexpected moment is more memorable than ten sparkle animations.
5. **Intimacy at scale** — everything should feel chosen, not default; made for one person, not a template.
