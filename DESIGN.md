---
name: Gabion Wall Malaysia
description: The Malaysian service-contractor canon, executed at full craft — light mineral ground, committed graphite and brand-red colour fields, condensed uppercase Bricolage Grotesque over Archivo body.
colors:
  stone-000: "#ffffff"
  stone-050: "#f4f4f1"
  stone-100: "#eae9e3"
  stone-200: "#ddd8c9"
  stone-300: "#c6c0ae"
  graphite-900: "#1c1f1d"
  graphite-800: "#252a27"
  graphite-700: "#2e3330"
  graphite-600: "#3f4642"
  graphite-500: "#545b55"
  brand-900: "#7d1f0e"
  brand-800: "#a02714"
  brand-700: "#c4321a"
  brand-600: "#cf3720"
  brand-500: "#e14024"
  brand-300: "#f2704f"
  brand-100: "#fdeae5"
  rust-700: "#8c3f1c"
  rust-600: "#a64b21"
  rust-100: "#f5e5dc"
  amber-600: "#c9871f"
  amber-100: "#f7ecd6"
  action-700: "#0c6836"
  action-600: "#0f7c41"
  action-100: "#dff0e5"
typography:
  display:
    fontFamily: "'Bricolage Grotesque Variable', 'Archivo Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(2.25rem, 1.71rem + 2.7vw, 3.9375rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 82"
  headline:
    fontFamily: "'Bricolage Grotesque Variable', 'Archivo Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9375rem, 1.63rem + 1.53vw, 2.875rem)"
    fontWeight: 750
    lineHeight: 1.06
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 86"
  title:
    fontFamily: "'Bricolage Grotesque Variable', 'Archivo Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.28rem + 0.48vw, 1.625rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 92"
  subhead:
    fontFamily: "'Bricolage Grotesque Variable', 'Archivo Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.13rem + 0.28vw, 1.3125rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
    fontVariation: "'wdth' 100"
  lede:
    fontFamily: "'Archivo Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.13rem + 0.28vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "'Archivo Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.02rem + 0.22vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
    fontVariation: "'wdth' 100"
    fontFeature: "tabular-nums"
  label:
    fontFamily: "'Archivo Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.1em"
    fontVariation: "'wdth' 100"
  button:
    fontFamily: "'Archivo Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
    fontVariation: "'wdth' 94"
rounded:
  s: "3px"
  m: "5px"
  full: "50%"
spacing:
  3xs: "0.25rem"
  2xs: "0.5rem"
  xs: "0.75rem"
  s: "1rem"
  m: "1.5rem"
  l: "2rem"
  xl: "3rem"
  2xl: "4rem"
  3xl: "clamp(4rem, 3rem + 5vw, 7rem)"
  gutter: "clamp(1.25rem, 0.9rem + 1.75vw, 2.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.action-600}"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.m}"
    padding: "0.75rem 1.375rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.action-700}"
    textColor: "#ffffff"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.graphite-900}"
    typography: "{typography.button}"
    rounded: "{rounded.m}"
    padding: "0.75rem 1.375rem"
    height: "3.25rem"
  button-ghost-hover:
    backgroundColor: "{colors.graphite-900}"
    textColor: "#ffffff"
  button-onDark:
    backgroundColor: "rgba(255, 255, 255, 0.06)"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.m}"
    padding: "0.75rem 1.375rem"
    height: "3.25rem"
  button-onDark-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.graphite-900}"
  button-disabled:
    backgroundColor: "{colors.stone-200}"
    textColor: "{colors.graphite-500}"
    rounded: "{rounded.m}"
  card-surface:
    backgroundColor: "{colors.stone-000}"
    textColor: "{colors.graphite-900}"
    rounded: "{rounded.m}"
    padding: "1.5rem"
  input-text:
    backgroundColor: "{colors.stone-050}"
    textColor: "{colors.graphite-900}"
    rounded: "{rounded.s}"
    padding: "0.75rem 0.875rem"
    height: "3rem"
  input-text-focus:
    backgroundColor: "#ffffff"
    textColor: "{colors.graphite-900}"
  input-text-invalid:
    backgroundColor: "{colors.rust-100}"
    textColor: "{colors.graphite-900}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.graphite-700}"
    rounded: "{rounded.s}"
    padding: "0.5rem 0.6875rem"
  nav-link-current:
    backgroundColor: "{colors.brand-100}"
    textColor: "{colors.brand-700}"
    rounded: "{rounded.s}"
  chip-category:
    backgroundColor: "{colors.stone-000}"
    textColor: "{colors.graphite-700}"
    rounded: "{rounded.m}"
    padding: "0.625rem 1rem"
  chip-placeholder:
    backgroundColor: "{colors.amber-100}"
    textColor: "#6b4a10"
    typography: "{typography.label}"
    rounded: "{rounded.s}"
    padding: "0.1875rem 0.5rem"
  icon-tile:
    backgroundColor: "{colors.brand-100}"
    textColor: "{colors.brand-700}"
    rounded: "{rounded.s}"
    size: "3rem"
---

# Design System: Gabion Wall Malaysia

## Overview

**Creative North Star: "The Well-Built Canon"**

This is the conventional Malaysian service-contractor website — sticky header with a WhatsApp button, dark hero over a site photograph, problem section, explainer, services grid, reasons-to-choose, projects, FAQ, contact band, fat footer — built to a standard the trade almost never reaches. The convention was **chosen, not defaulted into**. The user was offered four distinctive visual worlds and one assigned direction, "The Section Sheet" (a geotechnical drawing world, seed key `c2a06cab`), and deliberately declined all of them in favour of the category standard. The visitor arriving from a high-intent BM search for "kawalan hakisan tebing" gets exactly the arrangement they expect, executed properly. **Do not "improve" this into something expressive.** Novelty in the arrangement is a regression here; craft in the execution is the entire proposition. The craft bar is premium Malaysian SME service brands — the standard is *finish*, not *invention*.

The ground is light on purpose. The real use scene is someone standing outdoors in Malaysian daylight, on a phone, looking at the damaged ground they are worried about, often in glare. So the reading surface is mineral off-white (`stone-050`, `#f4f4f1`) rather than cream or dark, and the dark surfaces are deployed as deliberate, bounded regions rather than as the ambient mode. Colour does not appear as scattered accent flecks; it arrives as a **committed field** that owns a whole section from edge to edge, so the page reads as a stack of confident bands rather than a decorated document. Materially the world is quarry and site: wet-slate graphite, the client's brand red, sand-coloured rules, and one darkened WhatsApp green that means "act".

**The brand colour is #e14024, supplied by the client, and it outranks everything below it.** The build originally ran an olive second ground, derived from the brief's "earth tones … olive" line. When the real brand colour arrived, olive was **retired entirely** rather than kept alongside: red-orange and olive-green are near complementaries, and holding both meant two hues competing for the same committed-field role. Red now owns exactly the regions olive did.

Typographically the site pairs two self-hosted variable families. **Bricolage Grotesque** carries every heading — a contemporary grotesque with narrowed forms and cut terminals, condensed and uppercase in the way a works signboard is, but with far more character than a workhorse grotesque. **Archivo** carries body copy, labels and UI, where it out-reads Bricolage at 15–18px across long Malay sentences. There is exactly one authored motion moment on the entire site. Everything else that moves is a state transition responding to a pointer or a keystroke.

**Key Characteristics:**
- Light mineral ground for outdoor daylight legibility; dark regions are chosen, not ambient
- Committed colour fields that own entire sections (`.field-graphite`, `.field-brand`, `.field-stone`)
- Condensed uppercase Bricolage headings against normal-width Archivo body — two variable families, one role each
- Barely-rounded corners (3px / 5px), 1px sand rules, no decorative chrome
- One authored motion moment (the gabion cross-section); everything else is state
- Authored 24×24 / 1.75-stroke icon set; no emoji, no icon font, no third-party set
- Every image is a marked placeholder that announces what it is missing

## Colors

Mineral neutrals for reading, graphite and the brand red as the two grounds that own whole regions, and a single darkened green that is the only colour permitted to mean "act now".

### Primary
- **Wet Slate** (`graphite-900`, #1c1f1d): The dark committed ground. Owns the hero base, the problem section, the page hero on every interior page, the footer, and the comparison table head. Also the default text colour on light grounds (15.09:1 on `stone-050`) and the `theme-color` meta value.
- **Brand Red** (`brand-500`, **#e14024**): The client's supplied colour and the identity of the site. It appears at full strength wherever no small text sits on it — the logo mark in the header and footer, graphic fills, display emphasis. The committed field, the button fills and the link colour use adjacent steps for contrast reasons (below); all of them read as this colour.

  | Step | Value | Role | Measured |
  |---|---|---|---|
  | `brand-900` | #7d1f0e | Deepest, reserved | — |
  | `brand-800` | #a02714 | Hover / pressed | — |
  | `brand-700` | #c4321a | Links + small text on light | 4.93:1 on `stone-050` |
  | `brand-600` | #cf3720 | `.field-brand` ground, button fill | 4.97:1 with white |
  | `brand-500` | **#e14024** | The brand colour — fills, graphics, display | 4.24:1 with white |
  | `brand-300` | #f2704f | Text + icons on graphite | 5.77:1 on `graphite-900` |
  | `brand-100` | #fdeae5 | Tint surface; secondary text on `.field-brand` | 4.28:1 on `brand-600` |

### Secondary
- **WhatsApp Green, Darkened** (`action-600`, #0f7c41): The one action colour. Every primary button, the mobile contact bar's WhatsApp half, the contact page's primary channel tile. Darkened from the platform green specifically so white button text clears 4.5:1 — it measures 5.28:1, and the hover step `action-700` (#0c6836) reaches 6.89:1. Nothing decorative is ever painted this green.
- **Pale Green Wash** (`action-100`, #dff0e5): Backs the WhatsApp channel tile on Hubungi and the FAQ aside card's icon tile. Signals "this is the contact route" without adding a second saturated field.

### Tertiary
- **Oxide Rust** (`rust-600` #a64b21, `rust-700` #8c3f1c, `rust-100` #f5e5dc): **Form validation only** — the required-field asterisk, invalid input borders, the invalid-field wash, and error text. It used to also colour the problem-section icons, back when rust was the only warm colour in the system. With a red brand the two hues sit a few degrees apart and read as an inconsistency rather than a distinction, so the problem icons moved to `brand-300` and rust retreated to the one job where red-means-error is a universal convention. The old `rust-400` on-dark step was retired with that move.
- **Signal Amber** (`amber-600` #c9871f, `amber-100` #f7ecd6): Site-signage yellow. Its two jobs are the focus ring on light grounds and every placeholder/honesty affordance — the draft strip, the gallery notice, the empty-map panel, the "Contoh susunan" chips, the photo-slot warning glyph.

### Neutral
- **Mineral Stone** (`stone-050` #f4f4f1): The page ground. Cool and mineral, not cream — cream reads as hospitality, and this is a contractor.
- **Raised White** (`stone-000` #ffffff): Cards, service tiles, the header bar, the enquiry form panel, the category chips. The only "raised" surface value.
- **Stone Band** (`stone-100` #eae9e3): The `.field-stone` region ground — a quiet band used to separate two light sections without introducing a colour.
- **Sand Rule** (`stone-200` #ddd8c9) and **Strong Sand** (`stone-300` #c6c0ae): Every 1px divider, table row line, card border and input stroke. On dark fields, body copy sits at `stone-200` (11.67:1 on graphite) and de-emphasised copy at `stone-300` (9.15:1).
- **Graphite mids** (`graphite-500` #545b55 through `graphite-700` #2e3330): Muted body copy, secondary paragraph text, small-caps labels, and the ghost button stroke. `graphite-500` on `stone-050` measures 6.34:1 — it is safe as small text.

### Notice / placeholder family (temporary — removed at launch)

Every "this is not real yet" affordance draws from one amber family, so the honesty layer is visually distinct from the brand and trivially strippable. Nothing in the product design uses these.

| Token | Value | Use |
|---|---|---|
| `--warn-bg` | `= amber-100` #f7ecd6 | Draft strip, gallery notice, empty state, sample chips |
| `--warn-border` / `--warn-border-strong` | #e5cd9c / #e0c48a | Their edges |
| `--warn-text` / `--warn-text-strong` | #6b4a10 / #5c3f0c | Their copy and headings |
| `--warn-icon` | #a06a12 | The warning glyph on light |
| `--warn-on-dark-text` / `-strong` / `-icon` | #f0e6d2 / #ffd98a / #e8b755 | The same note over the hero photograph |
| `--hatch-a` / `--hatch-b` | #e4e0d3 / #eeebe1 | The light placeholder hatch |
| `--hatch-dark-a` / `--hatch-dark-b` | #222623 / #2b302c | The hero's dark hatch |

**These leave with the placeholders.** When the client's photographs and contact details land, this entire family and every rule that references it should be deleted, not repurposed as a brand accent.

### Utility tokens

Promoted out of components so they stop being drift: `--diagram-water` (#2f6f8f, the flow arrows), `--action-border` (#9ccdb1, the WhatsApp channel card edge), `--tick-on-brand` (#c7d4a4, check marks inside `.field-brand`), `--pin-on-dark` (#b7c48f), `--input-placeholder` (#5f655e, 5.4:1 on `stone-050`), `--focus-ring` / `--focus-ring-on-dark`, and `--hero-scrim` / `--note-on-photo`.

**The scrim is flat, never a gradient.** `--hero-scrim` is a single `rgba(21, 24, 22, 0.68)` fill whose only job is text legibility over a photograph. The one place `repeating-linear-gradient` appears is the placeholder hatch — a hard-stop two-tone texture, not a colour blend. That exception does not license gradient fills anywhere else.

### Named Rules

**The Committed Field Rule.** Colour arrives as a whole region or not at all. Apply `.field-graphite`, `.field-brand` or `.field-stone` to a full-bleed `<section>`; never to a card, a callout, or a paragraph. If you want a section to feel different, change its field — do not sprinkle the accent into an otherwise white section. The field classes also re-map their own descendants (headings go to `stone-000`, `.lede` goes to `stone-200` on graphite and `brand-100` on brand red), so a field is a complete environment, not a background swap.

**The Field Alternation Rule.** Two committed fields never touch. Reading down any page, a dark or coloured field is always separated from the next by a light section. On the home page the run is: graphite hero → graphite problems → white explainer → stone benefits → white services → red reasons → white projects → stone FAQ → red CTA → graphite footer.

**The Brand Ramp Rule.** #e14024 is the client's colour and the 500 step, but it is **4.24:1 with white** — enough for large text and graphics, not enough for the 4.5:1 body floor. So the ramp splits the job: `brand-500` wherever no small text sits on it, `brand-600` (#cf3720, 4.97:1 with white) as the field ground and button fill, `brand-700` (#c4321a, 4.93:1 on stone) for links and small text on light, `brand-300` (#f2704f, 5.77:1) for anything on graphite. Every step is within a few percent of the brand hue and reads as the same colour to a visitor. **Do not collapse this ramp back to a single value to "use the real brand colour"** — that trades legibility in Malaysian daylight for a purity nobody can see.

**The Rust Means Error Rule.** Oxide rust now names exactly one thing: an invalid form field. It is not the damage colour any more — brand red carries warmth across the site, and a second red-adjacent hue for "problem" read as a mistake rather than a signal. If a thing is not an invalid input, it is not rust.

**The One Green Rule.** `action-600` is reserved for the WhatsApp conversion. If a second thing on a screen is that green, one of them is wrong.

## Typography

**Display Font:** Archivo Variable (with `ui-sans-serif`, `system-ui`, `-apple-system`, `Segoe UI`, `Roboto`, `sans-serif`)
**Body Font:** Archivo Variable — the same family
**Label Font:** Archivo Variable at `wdth` 100% with wide tracking

One family does everything, self-hosted via `@fontsource-variable/archivo/wdth.css` and preloaded as `archivo-latin-wdth-normal.woff2` in `<head>` — the condensed uppercase H1 is the whole first impression, and a swap-in reflow on 3G would land exactly where the visitor is reading. Both variable axes are exercised: **weight 100–900** and **width 62–125%**.

**Character:** Archivo is a grotesque built for signage and forms — plain, structural, slightly industrial, with no calligraphic warmth. Condensed and uppercase it reads as a works signboard; at normal width and 400 weight it disappears into readable body copy. The whole typographic idea is that *condensation is the heading signal*, so headings can be loud without being large, and body text can stay generous without competing.

### Hierarchy
- **Display / h1** (weight 800, `font-stretch: 82%`, `clamp(2.25rem, 1.71rem + 2.7vw, 3.9375rem)`, line-height 1.02, letter-spacing −0.015em, uppercase): One per page. The hero headline and every `PageHero` title. Capped at 20ch in `PageHero`, 18ch in the home hero above 48rem. Wraps with `text-wrap: pretty` on phones and `balance` from 48rem up — balancing a long uppercase line into a narrow column strands short lines.
- **Headline / h2** (weight 750, `font-stretch: 86%`, `clamp(1.9375rem, 1.63rem + 1.53vw, 2.875rem)`, line-height 1.06, letter-spacing −0.01em, uppercase): Section headings. Steps down to `--step-3` (`clamp(1.625rem, 1.46rem + 0.82vw, 2.125rem)`) where an h2 is a column heading rather than a section heading (service entries, contact columns, the two-column lists).
- **Title / h3** (weight 700, `font-stretch: 92%`, `clamp(1.375rem, 1.28rem + 0.48vw, 1.625rem)`, line-height 1.2, letter-spacing −0.005em, **sentence case**): Card and item headings. Most in-page h3s are pinned down to `--step-1` where they sit inside a grid item.
- **Subhead / h4** (weight 700, no `font-stretch` override so it renders at 100%, `clamp(1.1875rem, 1.13rem + 0.28vw, 1.3125rem)`, line-height 1.3): The point where the type stops being condensed and rejoins the body voice.
- **Lede** (weight 400, `--step-1`, line-height 1.6, `graphite-600` on light, max 60ch): One supporting sentence under a heading. Re-coloured automatically inside the field classes.
- **Body** (weight 400, `clamp(1.0625rem, 1.02rem + 0.22vw, 1.125rem)`, line-height 1.65, `tabular-nums` globally): Prose blocks are capped at `--measure` (68ch); secondary paragraphs inside grid items run 42–44ch.
- **Label** (weight 700, 0.6875–0.8125rem, `font-stretch: 100%`, letter-spacing 0.08–0.13em, uppercase): Definition-list terms, footer column titles, "Sesuai untuk", before/after captions, the brand sub-line, placeholder chips.

### The scale tokens

The small end of the ramp is **fixed, not fluid**. Labels and captions gain nothing from scaling with the viewport, and an earlier fluid `--step--1` was exactly what let near-duplicate literals (15px and 15.5px) drift into the build across a dozen files. Every font-size in the codebase now resolves to one of these:

| Token | Value | Use |
|---|---|---|
| `--step--5` | `0.6875rem` (11px) | Micro uppercase labels — placeholder chips, slot titles, brand sub-line |
| `--step--4` | `0.75rem` (12px) | Meta labels, definition-list terms, footer column titles |
| `--step--3` | `0.8125rem` (13px) | Captions, notices, the draft strip, footnotes |
| `--step--2` | `0.875rem` (14px) | Small body — hints, form notes |
| `--step--1` | `0.9375rem` (15px) | Secondary body, nav links, list copy, card paragraphs |
| `--step-0` | `clamp(1.0625rem, 1.02rem + 0.22vw, 1.125rem)` | Body, buttons, inputs, wordmark |
| `--step-1` … `--step-5` | fluid clamps | Headings and lede, per the hierarchy above |

**Inputs must not resolve below 16px.** `--step-0` starts at 17px, which clears the threshold at which iOS Safari zooms on focus. Never set a form control to a smaller step.

**One step lives outside the ramp on purpose: `--diagram-label` (13px).** The cross-section's SVG `<text>` is measured in viewBox units, not CSS pixels, so it scales with the drawing rather than with the interface. A rem value would break the diagram's internal proportions. It is a named token rather than a bare literal precisely so it reads as a decision. Below 46rem the labels are hidden altogether — at that scale they land around 8px, and the hotspots plus the readout carry the same information.

### Named Rules

**The Two-Axis Rule.** Width carries hierarchy, weight carries emphasis. Headings get narrower as they get more important (82 → 86 → 92 → 100). Never fake a display face by letterspacing a condensed heading open, and never set body copy at a condensed width.

**The Width-Reset Rule.** Any small uppercase label explicitly resets `font-stretch: 100%`. Condensed *and* tracked-out *and* uppercase is unreadable at 12px. The same reset applies where an h2 must read as a card title rather than a section heading (`.aside-card h2`, `.aside-note h2` also drop `text-transform` and letter-spacing).

**The No Eyebrow Rule.** Nothing decorative sits above a heading. There are no kickers, no category tags, no "OUR SERVICES" mini-labels. The only element that ever appears above a heading is the amber "Contoh susunan" placeholder chip, and it is a warning, not a style.

## Layout

Content is constrained by `.wrap` — `max-width: 76rem` with `padding-inline: var(--gutter)` (`clamp(1.25rem, 0.9rem + 1.75vw, 2.5rem)`), or `.wrap--narrow` at `56rem` for single-column reading. There is no global column grid; each section declares the grid it needs. Two primitives break out of it: `.bleed` (`width: 100vw; margin-inline: calc(50% - 50vw)`) for imagery that must reach the viewport edge, and `.lift` (`position: relative; z-index: 2`) for a layer that overlaps the section boundary above it.

### The homepage composition — read this before editing `index.astro`

The homepage was originally the same vertical stack the interior pages still use: nine full-bleed bands in a row, each with identical `--space-3xl` padding, each the same shape — centred wrap, heading, lede, grid. **The user reviewed that build and rejected it as "separated by bulky sections."** It was re-composed, and the devices below are the fix. They are load-bearing; reverting any of them restores the problem.

1. **Fewer, longer runs.** Nine colour bands became four movements: one continuous graphite run carrying *both* the hero and the problem section with no edge between them (`.run--graphite`), a long light run holding the explainer, benefits and services, a red run for the reasons, then light again for projects and FAQ. A visitor scrolls through four changes, not nine.
2. **Every field change is overlapped.** No section edge is ever clean. `.run--graphite` carries `padding-bottom: clamp(7rem, 5rem + 9vw, 12rem)` purely so the white `.explain` panel can be pulled up into it on a negative margin; `.faq-sec` reserves the same kind of foot so the red `.cta` panel lifts into it. **If you change one of those paddings, change the matching negative margin.** They are a pair.
3. **Density varies on purpose.** Sections no longer share a padding value. Some runs are generous, others tight. Uniform `--space-3xl` everywhere is what made the page march.
4. **Grids are asymmetric.** The problem list staggers — the right column starts 5.5rem lower, so four items read as a diagonal drift rather than a 2×2 block. Benefits step every second pair inward by `clamp(1rem, 4vw, 3.5rem)` so the column edge is never a straight line. Services run one double-width dark feature card with the rest falling in beside it, and the last card widens to close the row. Reasons and FAQ pin their heading in a sticky left column against content running down the right.
5. **Imagery breaks the column.** The project row is `.bleed` — full viewport width with only the gutter as padding.

Interior pages keep the conventional stacked arrangement. That is deliberate: the homepage does the persuading, and the depth pages are read, not scrolled through.

Vertical rhythm comes from `--space-3xl` (`clamp(4rem, 3rem + 5vw, 7rem)`) on `.section` and `--space-2xl` (4rem) on `.section--tight`. Inside a section, `.section-head` caps at 46ch, puts `--space-s` (1rem) between the heading and its lede, and `--space-xl` (3rem) below the whole head block before the content starts.

Breakpoints are chosen per component from where the content breaks, not from a device table. The load-bearing ones: **48rem** (h1 switches to balanced wrapping; the problem list goes two-up; the footer goes three-column; the hero placeholder note stops floating), and **64rem** (the header nav becomes horizontal and the persistent mobile contact bar retires). Others in use — 30, 34, 40, 44, 46, 56, 60, 62, 68, 72rem — are local to a single grid.

### Named Rules

**The Air-Above Rule.** More space above a heading than below it. A section heading sits under `--space-3xl` of section padding and hands `--space-s` down to its lede and `--space-xl` to its content. Never let a heading sit closer to what precedes it than to what follows.

**The Reachable-Action Rule.** Below 64rem a fixed two-action bar (WhatsApp + Telefon) is pinned to the bottom of the viewport, and the footer reserves `4.5rem` of extra bottom padding so nothing is trapped underneath it. The bar retires only once the header's own WhatsApp button appears — retiring it at 48rem left tablets and landscape phones with no persistent action at all.

**The Measure Rule.** Nothing runs wider than it can be read. `--measure` is 68ch for prose, 60ch for a lede, 46ch for a section head, 42–44ch for card body copy, 18–20ch for an H1.

## Elevation & Depth

The system is flat at rest and depth is almost entirely tonal — fields, 1px sand rules, and white cards on a mineral ground do the separating. Shadows appear only as a **response**: a card lifted by a pointer, a header that has been scrolled past, a menu that has opened over content. There are exactly three shadow tokens and each is two-layer, with a contact shadow and an ambient shadow, both offset downward and both blurred.

### Shadow Vocabulary
- **Resting card** (`--shadow-s`: `0 1px 2px rgba(28,31,29,0.06), 0 2px 6px rgba(28,31,29,0.05)`): The only shadow used at rest, and only on two surfaces that must read as a distinct panel on a busy page — the enquiry form and the FAQ aside card. Also the pressed state of a button.
- **Lifted** (`--shadow-m`: `0 2px 4px rgba(28,31,29,0.06), 0 8px 20px rgba(28,31,29,0.08)`): Hover on service cards and buttons, and the scrolled header (`[data-scrolled]`).
- **Overlay** (`--shadow-l`: `0 4px 8px rgba(28,31,29,0.07), 0 18px 40px rgba(28,31,29,0.12)`): One use only — the mobile navigation panel dropping over page content.

The fixed contact bar carries a hand-written inverted variant (`0 -2px 6px rgba(28,31,29,0.08), 0 -10px 28px rgba(28,31,29,0.1)`) because its light source is above and its edge is below.

### Named Rules

**The Real-Light Rule.** Every shadow has both an offset and a blur, and its colour is graphite-tinted (`rgba(28,31,29,…)`), never neutral black. A zero-offset shadow is a glow, and glows are banned here.

**The Flat-At-Rest Rule.** If a surface has a shadow when nothing is happening, justify it. Cards, chips, tiles and channels are separated by a 1px `--rule` border on white, not by elevation.

## Shapes

The form language is rectangular and barely softened. Two radii exist: `--radius-s` (3px) for small tiles, chips, inputs, nav links, icon squares and the brand mark; `--radius-m` (5px) for cards, buttons, panels, photo slots and the comparison table shell. Nothing on the site is more rounded than 5px except the numbered process steps, which are true circles (`border-radius: 50%`) because they are counters, not containers.

Borders do the structural work: 1px `--stone-200` for rules and card edges, 1.5px `--stone-300` for input strokes and the mobile menu button, 2px for button outlines (so the ghost and on-dark variants have the same optical mass as the filled primary), and 2px **dashed** for anything that is deliberately unfinished. Icon tiles are 3rem squares (3.25rem on service entries, 4rem on the projects "ask" block) at `--radius-s`, filled `brand-100` with an `brand-700` glyph on light, or `rgba(255,255,255,0.12)` with a white glyph inside `.field-brand`.

**The Dashed-Means-Missing Rule.** A dashed border on this site means content is absent, never that content is optional or secondary. Photo slots, the empty map panel, and the unconfirmed Facebook channel are dashed. Nothing else is.

## Components

### Buttons
- **Shape:** Barely rounded (5px, `--radius-m`), 2px border on every variant, minimum height 3.25rem (2.75rem for the compact header CTA) so it stays a comfortable thumb target on a phone held at a site.
- **Primary:** Solid WhatsApp green (`action-600`) with white text, `0.75rem 1.375rem` padding, weight 700 at `font-stretch: 94%`, and a leading 20px icon at `0.625rem` gap. This is the conversion button; it appears in the header, the hero, every CTA band, the footer, the contact bar and the enquiry form.
- **Hover / Focus:** Background and border step to `action-700`, `--shadow-m` appears, and the button rises 1px (`translateY(-1px)`) over `0.18s var(--ease-out)`. Active drops back to 0 with `--shadow-s`. Focus is the global amber ring.
- **Ghost:** Transparent with a `graphite-500` stroke and graphite text; on hover it inverts to solid graphite with white text. Used for in-page navigation ("Lihat semua projek", "Semua soalan lazim") — never for the WhatsApp action.
- **On-dark:** `rgba(255,255,255,0.06)` fill with a `rgba(255,255,255,0.65)` stroke and white text; inverts to solid white with graphite text on hover. Used beside the primary on the hero and the red CTA band.
- **Disabled:** `stone-200` on `stone-200` with `graphite-500` text, `cursor: not-allowed`, `pointer-events: none`. Supports both `:disabled` and `[aria-disabled="true"]`.

### Cards / Containers
- **Corner Style:** 5px (`--radius-m`).
- **Background:** `stone-000` white on the mineral page ground; `stone-100` for the quiet aside note.
- **Border:** 1px `--stone-200`, which shifts to `--brand-500` on hover.
- **Shadow Strategy:** None at rest (see Elevation). Service cards gain `--shadow-m` and a 2px lift on hover; contact channels gain `--shadow-s` and a border shift only, no lift, because they are a vertical list and a lifting list looks nervous.
- **Internal Padding:** `--space-m` (1.5rem) for cards; `--space-l` (2rem) for the form panel, dropping to `--space-m` below 34rem.

### Inputs / Fields
- **Style:** Recessed rather than raised — `stone-050` fill on a white panel, 1.5px `--stone-300` stroke, 3px radius, 3rem minimum height, 16px text so iOS does not zoom on focus.
- **Hover:** Stroke darkens to `graphite-500`.
- **Focus:** Fill goes to pure white and the stroke goes `brand-600`, plus the global amber focus ring. The field visibly *opens* rather than glowing.
- **Error:** Stroke `rust-600`, fill `rust-100`, an error paragraph in `rust-700` at weight 600, `aria-invalid="true"` on the control, and the message revealed via `role="alert"`. The error clears the moment the visitor starts typing a fix. The required-field asterisk is `rust-600`.
- **Labels** sit above the field at weight 700, 0.9375rem, full graphite — never floating, never inside the field.

### Navigation
- **Style:** Sticky white header, 1px sand bottom rule, `4.25rem` minimum height (`--header-h`, which also drives `scroll-padding-top`). It gains `--shadow-m` once scrolled more than 8px via a `[data-scrolled]` attribute.
- **Brand:** A 2.5rem brand-red (`brand-500`) square at 3px radius holding the authored `gabion` mesh glyph in white, beside a two-line lockup — the short name at 1.125rem/800/`font-stretch: 84%` uppercase, and a `0.6875rem` tracked sub-line ("Pakar Pemasangan") in `graphite-500`.
- **Links:** 0.9375rem, weight 600, `graphite-700`, 3px radius. Hover fills `stone-100`. The current page (`aria-current="page"`) fills `brand-100` with `brand-700` text — colour and fill, no underline, no border-bottom marker.
- **Mobile (below 64rem):** A bordered "Menu" button with authored menu/close glyphs swapped by `aria-expanded`; the panel drops absolutely below the header on white with `--shadow-l`, links become full-width 1.0625rem rows separated by `stone-100` hairlines, and the WhatsApp CTA becomes a full-width 3.25rem button at the bottom. Escape closes and returns focus to the toggle.

### Focus Treatment
A single global rule covers every interactive element: `outline: 3px solid var(--amber-600)` at `outline-offset: 3px` with a 2px radius. Inside `.field-graphite`, `.field-brand` and the hero it brightens to `#ffd166` (11.53:1 on graphite) so it survives on dark ground. The skip link is a graphite tab that slides down from `translateY(-120%)` on focus.

**The One-Ring Rule.** Focus is amber everywhere. Do not invent a per-component focus style, and do not remove the outline in favour of a border change — the border change is the *hover* language.

### Icon System (signature)
An authored set defined in a single component: one 24×24 grid, `stroke-width: 1.75`, round caps and joins, `fill: none`, colour inherited via `currentColor`, always `aria-hidden`. Twenty-one glyphs, drawn for this trade — `slope-fail` (a bank profile slipping), `gabion` (the wire mesh grid), `drainage` (water passing through the face), `wall` (staggered stone courses), `survey`, `stone`, `water`, `shield`, plus the utility set. WhatsApp and Facebook are the only filled glyphs, because brand marks are solid by definition. Sizes in use: 18, 20, 22, 24, 26, 28, 30, 32. **No emoji or unicode character is used as an icon anywhere on this site**, and no third-party icon package is installed.

### Gabion Cross-Section Diagram (signature — the one motion moment, and the one interaction)
A drawn 640×400 SVG section of a stepped gabion wall: three battered tiers of caged stone at the foot of a hatched soil bank, vegetation ticks along the retained surface, a ground line with hatch ticks, mesh drawn *over* the fill as it is in life, and three blue (`#2f6f8f`) flow lines with arrowheads passing through the wall face. Individual stones are deterministic irregular hexagons — a seeded `mulberry32(20260802)` RNG, so every build renders the identical drawing.

On first scroll into view (IntersectionObserver at 0.25 threshold) the stones settle in course by course, bottom tier first, left to right, at `0.62s var(--ease-out)` with staggered per-stone delays; then the three flow lines draw through via `stroke-dashoffset` at `0.85s`, and their arrowheads fade in. Failsafes are load-bearing: the pre-animation state is applied by an inline script **only** when `prefers-reduced-motion` is not set, so with no JS, with reduced motion, or in print the finished drawing renders immediately; a 2.5s timeout and a `beforeprint` listener both force the reveal so the cages can never stay empty. Nothing is photographed, so the page explains the product before the client supplies a single photo.

**Exploration.** Four hotspots sit over the drawing — the mesh cage, the stone fill, the water path and the retained slope — positioned as percentages of the viewBox so they track the drawing at every width. Selecting one sets `data-active` on the figure, which drops every `.part` to `0.22` opacity except the matching one, hides the static SVG labels so nothing is double-labelled, and swaps the readout to that part's explanation in plain Malay. Tapping the open hotspot again closes it; Escape closes it from the keyboard.

The accessibility and fallback behaviour is load-bearing, not decoration:

- Hotspots are real `<button>`s with `aria-pressed` and `aria-controls`, keyboard reachable in order, with a **44px hit area** around an 18–22px dot — sized for a thumb outdoors, not a mouse.
- The readout is `aria-live="polite"`, so the change is announced rather than only seen.
- **The annotations ship visible in the markup and are collapsed by the script**, never `hidden` in the HTML. With JavaScript unavailable all four read as a plain stacked list under the drawing, and the hotspots (which would do nothing) are hidden by `.is-interactive` gating. Do not add `hidden` to those items to "clean up" the markup — it would silently delete the fallback.
- Below **46rem** the static SVG labels are dropped entirely. Label text is sized in viewBox units, so it scales with the drawing and lands around 8px on a phone; the hotspots and the readout carry the same information, and the no-JS list still carries it in full.

**The One Moment Rule.** This is the only authored animation on the site. Everything else that moves is a state transition — 0.15s for colour on links and nav, 0.18s for card/button hover, 0.22s for the FAQ chevron rotation — all on `--ease-out` (`cubic-bezier(0.16, 1, 0.3, 1)`). No scroll-linked parallax, no staggered section reveals, no counters, no marquees. If you need a second animated moment, you almost certainly need a better diagram instead.

### Accordion (FAQ)
Native `<details>`/`<summary>` with the marker suppressed. Rules top and bottom in `--stone-200`, question at `--step-1`/700 with `--space-m` vertical padding, an `brand-700` chevron that rotates 180° over `0.22s` (suppressed entirely under `prefers-reduced-motion`), and an answer body capped at `--measure` in `graphite-700`. The question tints `brand-700` on hover. It works with JavaScript disabled.

### Placeholder Conventions (signature — remove at launch)
These are deliberate honesty affordances, not styling accidents. They exist so that nothing on this site can be mistaken for real client material, and **every one of them must be removed at launch, not restyled.**

- **`PhotoSlot`** — the marked image placeholder used for *every* image on the site. A diagonal `repeating-linear-gradient` hatch at 6px/12px, a 2px dashed border, and a centred note stating the reference code (matching `SENARAI-BAHAN-KLIEN.md`), the shot required in Bahasa Melayu, and the minimum pixel width. `tone="light"` uses sand hatch on a light ground; `tone="dark"` uses graphite hatch with square corners for the hero. Each slot is `role="img"` with an `aria-label` that says the photograph has not been supplied, so the gap is announced to screen readers too. It is `container-type: inline-size` and sheds detail in three container-query steps rather than clipping: below 300px the size line disappears and the spec clamps to 4 lines; below 210px, 3 lines; below 150px the spec disappears entirely, leaving the hatch, border and glyph. Replace the whole component with a real `<img>`/`<picture>` — do not restyle it to look finished.
- **The draft strip** — an amber band above the header, rendered only while `isPlaceholderContact` is true (i.e. the WhatsApp number is still `60000000000`). It disappears by itself the moment the real number lands in `src/config/site.ts`.
- **`isPlaceholderFacebook`** — an unconfirmed link is rendered as *text*, never as a link that goes nowhere: italic `stone-300` in the footer, and a dashed non-interactive channel tile on Hubungi. Same pattern for the missing Google Map, which renders a hatched empty panel naming the material to supply rather than a fake map.
- **The "Contoh susunan" chips** — small amber uppercase chips above every project heading declaring the entry is layout scaffolding, not a delivered job. The projects page repeats this in a full amber notice, and unresolved project fields render in italic grey ("Akan dinyatakan pada projek sebenar").

**The Honest Gap Rule.** An absent thing is drawn as an absent thing — hatched, dashed, amber, and captioned with what is missing. Never fill a gap with stock imagery, an invented project, a lorem paragraph, or a dead link.

## Do's and Don'ts

### Do:
- **Do** treat the conventional arrangement as the deliverable. This is the category canon by explicit user decision over the assigned direction "The Section Sheet" (seed key `c2a06cab`); craft goes into execution, never into rearranging the expected page.
- **Do** apply colour as a committed field on a full-bleed section (`.field-graphite`, `.field-brand`, `.field-stone`), and alternate so two non-light fields never touch.
- **Do** step the brand ramp to the ground you are painting on: `--brand-300` on graphite (5.77:1), `--brand-700` for text and links on light (4.93:1), `--brand-600` for fills carrying white text (4.97:1), and `--brand-500` — the exact client colour — wherever no small text sits on it. `--brand-500` against white is only 4.24:1, so it is a fill and a graphic, not a body-text colour.
- **Do** set headings condensed and uppercase at the exact stretch for their level — h1 82%, h2 86%, h3 92%, h4 100% — and reset any small tracked label to `font-stretch: 100%`.
- **Do** leave more space above a heading than below it.
- **Do** keep `--radius-s` (3px) and `--radius-m` (5px) as the only radii, and let 1px sand borders do the separating.
- **Do** draw new icons on the same 24×24 grid at 1.75 stroke with round caps, inheriting `currentColor`.
- **Do** give every interactive element the global amber focus ring, and brighten it to `#ffd166` inside dark fields.
- **Do** keep the persistent WhatsApp/Telefon bar below 64rem and keep the footer's 4.5rem bottom clearance with it.
- **Do** ship every change working without JavaScript and under `prefers-reduced-motion` — the diagram, the FAQ and the navigation all degrade to a usable finished state.

### Don't:
- **Don't** use gradient text, gradient fills or gradient scrims. The hero scrim is a flat `rgba(21,24,22,0.68)` wash precisely because its job is legibility, not atmosphere. (The only `linear-gradient` in the build is a hard-stop two-tone hatch pattern for placeholders — a texture, not a blend.)
- **Don't** introduce glassmorphism, `backdrop-filter`, frosted panels or translucent cards.
- **Don't** add eyebrows, kickers or category labels above headings.
- **Don't** use emoji or unicode characters as icons, or install a third-party icon set — extend `Icon.astro` instead.
- **Don't** use a coloured `border-left` thicker than 1px as a callout device. There is not one in the build, and adding one would import a different design language.
- **Don't** write a zero-offset shadow, a neutral-black shadow, or a coloured glow. Shadows are graphite-tinted, offset and blurred.
- **Don't** paint anything `action-600` green except the WhatsApp conversion, and don't use rust for anything that is not damage or an error.
- **Don't** add a second authored animation. New motion must be a state transition on `--ease-out` under 0.25s.
- **Don't** scatter accent colour into an otherwise light section as flecks, chips or coloured headings — change the field or leave it alone.
- **Don't** restyle a `PhotoSlot`, the draft strip, or a "Contoh susunan" chip to look finished. Remove them when the real material arrives.

## Known Constraints & Debt

Recorded as of this build so the next person does not mistake any of it for a finished decision.

- **Every image on the site is a marked placeholder.** There is not one real photograph in the build. All imagery is `PhotoSlot` with a reference code pointing at `SENARAI-BAHAN-KLIEN.md`.
- **`public/robots.txt` currently carries `Disallow: /`.** This is deliberate — the site must not be indexed while placeholder contact details are live — and it must be removed at launch, along with the placeholder sitemap domain.
- **The business name and every contact detail are unconfirmed.** `site.name` is literally `'Nama Syarikat Anda'`; the WhatsApp and phone numbers are deliberately non-dialable (`60000000000`), the email, address, opening hours, Facebook URL and Google Map embed are all placeholders, and `astro.config.mjs` still points at `https://www.example-gabionwall.com`. All of it lives in `src/config/site.ts`, which is the single source of truth.
- **The amber focus ring is marginal on light grounds.** `--amber-600` (#c9871f) measures **3.01:1** on white, **2.73:1** on the `stone-050` page ground and **2.48:1** on the `stone-100` field — at or below the 3:1 non-text contrast floor. The 3px width and 3px offset carry it perceptually, but a darker amber (or a graphite ring on light grounds) would make it defensible. The on-dark override `#ffd166` is fine at 11.53:1.
- **The cross-section keeps its own literal palette.** `GabionDiagram.astro` sets its greens, earth browns and the water blue as SVG presentation attributes, which cannot take `var()`. They depict vegetation and topsoil rather than brand — grass on a slope stays green whatever the brand is — so they did not leave with the olive ramp. Everything else that was previously hard-coded (the placeholder amber family, the hatch pairs, the WhatsApp tile border, the input placeholder grey, the scrims) is now tokenised.
- **The `.field-stone` hatch is duplicated.** The empty-map panel on `hubungi.astro` re-declares `PhotoSlot`'s hatch by hand rather than reusing the component. If the hatch changes, both need changing.
- **Breakpoints are per-component, not systemic.** Twelve distinct min-widths are in use. This is intentional (each grid breaks where its content breaks) but it means there is no breakpoint token to reason from.
