# ICETET 2027 Visual Design Direction

## Design Concept

**Deep-tech, luminous, precise**

ICETET 2027 will feel like a serious international technology forum with a visible point of view: midnight research environments, luminous data signals, crisp editorial typography, and deliberate moments of saffron warmth. The design will balance cinematic dark hero areas with spacious light reading sections so the site feels futuristic without sacrificing academic credibility or accessibility.

The visual language will avoid generic college-website patterns such as uniform rounded cards, flat blue backgrounds, dense decorative gradients, and oversized institutional navigation. It will instead use strong typographic hierarchy, controlled glow, technical grid details, purposeful motion, and image-led content blocks.

## Color Palette

All values will be CSS variables in `assets/css/style.css`.

| Token | Value | Use |
| --- | --- | --- |
| `--ink-950` | `#070B1F` | Deep hero and footer background |
| `--ink-900` | `#0B1230` | Dark section background and navigation |
| `--ink-800` | `#111B3D` | Elevated dark surfaces |
| `--ink-700` | `#1B2852` | Card borders and secondary dark surfaces |
| `--slate-900` | `#1E293B` | Primary text on light sections |
| `--slate-600` | `#64748B` | Supporting text and metadata |
| `--mist-50` | `#F7F8FC` | Soft off-white section background |
| `--mist-100` | `#EEF2F8` | Light borders and alternate surfaces |
| `--white` | `#FFFFFF` | High-contrast text and surfaces |
| `--electric-blue` | `#3B82F6` | Primary interactive accent |
| `--cyan` | `#22D3EE` | Gradient endpoint, signals, focus glow |
| `--electric-gradient` | `linear-gradient(120deg, #3B82F6, #22D3EE)` | Headings, borders, active accents |
| `--saffron` | `#F59E0B` | Primary CTA and selected highlights |
| `--saffron-bright` | `#FBBF24` | CTA hover and small emphasis |
| `--success` | `#34D399` | Live/upcoming status indicator |

### Contrast Rules

- Body text on `--mist-50` uses `--slate-900`.
- Body text on dark backgrounds uses `--white` or a high-contrast mist tone.
- Saffron is used for buttons with dark text, not small light text on white.
- Electric blue and cyan are reserved for large text, borders, glows, and controls with sufficient contrast.
- Focus rings use a 3px cyan or saffron outline with a visible offset.

## Typography

| Role | Family | Weight | Use |
| --- | --- | --- | --- |
| Display headings | Space Grotesk | 600-700 | Hero title, section headings, page banners |
| Body text | Plus Jakarta Sans | 400-700 | Paragraphs, labels, navigation, forms |
| Numerical data | JetBrains Mono | 500-700 | Countdown, dates, statistics, fees |

Google Fonts will be loaded with preconnect hints and local fallback stacks:

```css
--font-display: "Space Grotesk", "Trebuchet MS", sans-serif;
--font-body: "Plus Jakarta Sans", "Trebuchet MS", sans-serif;
--font-mono: "JetBrains Mono", "SFMono-Regular", Consolas, monospace;
```

Typography will use `clamp()` for fluid sizing. The desktop hero title will reach approximately 80px while remaining controlled on mobile. Letter spacing will remain neutral or slightly positive for labels; no cramped negative tracking will be used.

## Spacing and Shape System

The layout will use an 8px base scale:

```css
--space-1: 0.5rem;
--space-2: 1rem;
--space-3: 1.5rem;
--space-4: 2rem;
--space-5: 3rem;
--space-6: 4rem;
--space-7: 6rem;
--space-8: 8rem;
```

- Small control radius: `8px`.
- Card radius: `16px`.
- Hero and large media radius: `24px` only where the image is genuinely framed.
- Pills: `999px` for status labels, metadata chips, and draft mode.
- Borders: 1px translucent borders on dark glass surfaces; solid mist borders on light surfaces.
- Shadows: broad, low-alpha shadows rather than heavy black outlines.
- Content width: approximately `1200px`, with generous edge padding at desktop and 20px minimum gutters on mobile.

## Layout Rhythm

1. **Hero:** full viewport or near-full viewport, cinematic, dark, and image-led.
2. **Signal strip:** countdown and key facts in a compact dark or translucent band.
3. **Light reading section:** conference narrative with generous whitespace.
4. **Dark technical section:** tracks, research themes, and glowing cards.
5. **Light schedule section:** dates and readable table fallback.
6. **Dark people section:** speakers and committee highlights.
7. **Light utility section:** guidelines, publication, fees, and contact workflows.
8. **Gallery:** dark or mist surface with a masonry-like image rhythm.
9. **Closing CTA:** “Be part of ICETET 2027” above the multi-column footer.

## Signature Components

### Hero

- Full-viewport image with a midnight overlay.
- Animated low-cost network/circuit layer using a canvas or inline SVG.
- Blurred blue/cyan atmospheric shapes behind content, kept sparse and non-distracting.
- Small pill: `International Conference • In association with NIELIT`.
- Gradient text treatment for `ICETET 2027`.
- Full title, dates, venue, and organizing department in glass chips.
- Amber `Submit Paper` CTA and translucent `Register Now` CTA.
- Four countdown tiles in JetBrains Mono.
- Host and NIELIT logo row anchored near the lower hero edge.

### Navigation

- Transparent over the hero and progressively frosted on scroll.
- Thin luminous border and compact height after scrolling.
- Animated gradient underline for hover and active page.
- Persistent Submit Paper action on desktop.
- Full-screen mobile overlay with staggered links and a clear close control.

### Section Heading

Each major section gets:

- Uppercase eyebrow with a small signal line.
- Large Space Grotesk heading.
- One concise supporting sentence.
- Optional right-side action link or CTA.

### Stats Strip

A compact responsive strip for tracks, speakers, expected papers, and participating countries. Values will be sourced from existing data where possible and retain placeholders where official numbers are unknown. Counters animate once on entry and stop when complete.

### Track Cards

- Dark glass surface with a subtle gradient border.
- Icon inside a luminous circular frame.
- Topic list kept scannable, with a clear link to the full call-for-papers page.
- Desktop-only pointer tilt limited to a small angle and disabled for touch/reduced motion.

### Speaker Cards

- Image-led cards with stable aspect ratio to prevent layout shift.
- Portraits begin slightly desaturated and transition to color on hover.
- Name and designation sit in a controlled bottom overlay rather than a detached text block.

### Committee Cards

- Circular or rounded portrait crop with an electric gradient ring.
- Role hierarchy shown with an elegant group heading.
- Full committee page uses grouped sections instead of one undifferentiated grid.

### Important Dates

- Vertical timeline with a luminous progress line.
- Next upcoming date gets a cyan/saffron emphasis and status marker.
- Past dates are visually quieter but remain fully readable.
- Accessible table remains available below or beside the timeline, with horizontal scroll on narrow screens.

### Registration and Fees

- Fee table becomes a set of pricing cards on larger screens.
- Early-bird option gets the restrained `Best value` badge and saffron edge.
- On small screens, the accessible table remains horizontally scrollable and does not create body overflow.

### Gallery and Lightbox

- Masonry-inspired grid with varied image spans on larger screens and stable tiles on mobile.
- Hover uses image scale and a subtle gradient overlay only.
- Lightbox uses a blurred midnight backdrop, previous/next controls, Escape close, and arrow-key navigation.

### Footer and Closing CTA

- Full-width CTA band with “Be part of ICETET 2027”.
- Multi-column midnight footer with a thin gradient top edge.
- Social links use inline SVG symbols with accessible labels and luminous hover states.
- Draft badge remains fixed and visible while `isDraft` is true.

## Motion Rules

- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Scroll reveal: opacity plus a small upward transform, 400-800ms.
- Grid items use short stagger delays, capped to avoid slow pages.
- Animate only `transform`, `opacity`, and controlled background/box-shadow transitions.
- Network/circuit background pauses when outside the viewport.
- Hero atmospheric motion pauses under `prefers-reduced-motion`.
- Countdown changes use opacity or a short translate transition, never layout-changing animation.
- All interactive motion is disabled or minimized for reduced-motion users.

## Responsive Breakpoints

- **360px:** single-column content, compact hero, stacked CTAs, mobile navigation overlay, stable chips and tables.
- **768px:** two-column content where appropriate, larger hero type, two-column track and committee layouts.
- **1024px:** desktop navigation, split editorial sections, three-column card grids.
- **1440px:** full visual rhythm, five-column gallery, wider hero composition.
- **1920px:** capped content width with expanded breathing room; no uncontrolled type scaling or stretched cards.

## Accessibility and Performance Commitments

- Semantic `header`, `nav`, `main`, `section`, `footer`, and correct heading hierarchy.
- Visible focus states for every keyboard-interactive element.
- Inline SVG icons with `aria-hidden="true"` when decorative and accessible labels when functional.
- Meaningful alt text for content images; empty alt for decorative images.
- Stable dimensions/aspect ratios for hero, portraits, cards, gallery tiles, and logos.
- Lazy-load below-fold images; preload the primary hero image and font resources.
- Keep the canvas/network layer lightweight and pause it off-screen.
- No third-party JavaScript libraries, framework, build step, or unused CSS dependency.

## Implementation Order After Approval

1. Rewrite the shared CSS variables, typography, layout primitives, and global components.
2. Redesign the shared header/footer and hero-ready navigation behavior.
3. Rebuild `index.html` markup and the home renderer first for review.
4. Update inner pages one by one while preserving all content and links.
5. Re-run the responsive and interaction test matrix at 360px, 768px, 1024px, 1440px, and 1920px.
6. Update the test report and handover documentation with the redesign results.
