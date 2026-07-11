# JBNewGen — Design Specifications

The single source of truth for design decisions. Everything here is enforced in code
(`src/app/globals.css` + components). Add new specs as bullet points under the right section.

---

## 1. Color system — 60 / 30 / 10

A strict three-tone palette. No red, no gradients-of-two-hues as accents.

| Weight | Role | Color | Token(s) |
|-------:|------|-------|----------|
| **60%** | Base / background | **White** | `#ffffff`, plus `ink-50` (`#eef3fa`) for soft section bands |
| **30%** | Structure / text / dark sections | **Navy** | `ink-800`→`ink-950` (text `ink-900`), dark bands `ink-950` |
| **10%** | Accent / CTAs / emphasis | **Orange** | `flame-500` `#f7941d`, `flame-600` `#e07b0e` |

**Rules**
- **Accent = solid orange.** Never an orange→blue gradient. The `text-gradient-brand`
  utility now renders **solid orange** (kept only so existing call-sites stay valid).
- **All primary text = navy** (`ink-900`), secondary text = muted navy (`ink-500`).
- **Red is removed.** The old `signal` (red) accent is retired — CTAs are orange.
- **Blue (`azure`) is being phased out.** Still present only inside the dark **Services
  showcase** interactive visuals (pending its own review). Everywhere else: navy + orange.
- Semantic status colors (e.g. success green) are allowed for data viz only and don't
  count as the accent.

## 2. Corner radius — one value everywhere: **7px**

A single, uniform radius across the entire UI. No pills, no mixed scale.

- Enforced at the token level: `--radius-xs … --radius-4xl` are all `7px`, so every
  `rounded-*` utility renders 7px. `.card` = 7px. All arbitrary radii = `rounded-[7px]`.
- **Small elements clamp to circles automatically:** CSS caps radius at 50% of the box,
  so status dots and tiny icons (≤14px) still render round even with a 7px rule.
- **Consequence:** avatars/monograms and icon tiles are now **rounded squares** (7px),
  not circles — this is intentional, for a consistent system. (Flag if you want specific
  avatars kept circular.)

## 3. Typography

- **Display / headings:** Space Grotesk (600–700), tight tracking (`-0.02em`).
- **Body / UI:** Inter.
- **Serif accent:** Instrument Serif (italic) — used sparingly for hero emphasis lines;
  echoes the serif "NewGen" in the logo. Class: `font-serif italic`.
- Headings use `text-wrap: balance`; body copy `text-wrap: pretty`.
- **Removed:** the small uppercase "eyebrow" label (and its leading dot) above headings —
  it read as clutter. Sections lead with the heading directly.

## 3b. No redundancy

Each fact, phrase, or number earns **one** home. Within a section, the heading, body,
lists, and quotes must not restate each other. Across the page, a signature phrase lives
in one place:

- The signature stats (35 yrs / 7,000 / 30,000) live in the **ProofBar** — the hero and
  founder band reference the story, not the numbers.
- The old Process/Why-us/Journey section was **removed entirely** — the real site has no
  differentiation copy, and a facts-only version was too thin to justify the slot. Proof now
  lives in ProofBar, ServicesShowcase, Testimonials and FounderBand.
- The CEO quote owns the "28 states / languages / tiers / buyers" framing — the Problem
  heading/body set it up and draw the takeaway instead of restating it.

## 4. Layout

- Max content width `max-w-7xl` (1280px), horizontal padding `1.25rem` → `2rem`.
- Section rhythm: `py-20` (mobile) → `py-28` (desktop).
- Space with flex/grid `gap`, not per-element margins.

## 5. Motion

- Entrance: subtle fade + rise on scroll (`Reveal`), 700ms.
- Respects `prefers-reduced-motion`.

---

## Decisions log

- **Hero:** removed the "Your India GTM Partner" eyebrow + dot; removed the floating image
  "bubble" cards; accent word is **solid orange**, headline is **navy**; no red, no blue.
- **Eyebrow tag removed site-wide** (all homepage sections + page headers).
- **Palette simplified to white / navy / orange**; red retired, blue phased out.
- **Radius standardized to a single 7px** everywhere (tokens + `.card` + all classes);
  buttons no longer pills; avatars are rounded squares.
- **Removed the Process + Why-us sections** (and the merged `Journey` that briefly replaced
  them). They were constructed differentiation copy the real site doesn't have; a strict
  real-text version was too thin. `Process.tsx`/`WhyUs.tsx`/`Journey.tsx` +
  `processSteps`/`differentiators`/`journeyOutcomes` all removed.
- **Content rule reaffirmed:** section copy must be real site text, not generated claims.
  Testimonial quotes verified against the live site.

## Positioning (decided)

- **Hero = Option C:** lead with the distribution track record (35 yrs · 7,000+ partners ·
  30,000+ touchpoints), then branch into the **two markets**:
  1. **Market entry / GTM** — global brands entering & scaling in India → `/services/business-consultancy`
  2. **Customer communication & cloud (CPaaS/CCaaS)** — reaching India's customers via the
     channel → `/services/cpaas-omnichannel`
- Tagline + metadata updated to "India's Distribution & GTM Partner".
