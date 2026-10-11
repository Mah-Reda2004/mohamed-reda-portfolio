---
name: portfolio-design
description: Use when editing, extending or adding pages to Mohamed Reda's electrical engineering portfolio (HTML/CSS/JS on Cloudflare Pages). Enforces the exact dark-navy engineering dossier design from the reference screenshots and consistent responsive behavior for mobile and tablet.
---
# Portfolio design skill
## Rules
1. Match the reference screenshots exactly: same section order, copy, hierarchy. Never restyle and never add sections unasked.
2. Use only the tokens in `assets/css/style.css :root` (--bg #0a111f, --card #111c30, --line #1e2c45, --ac #2563eb, --ok #22c55e). No new colors, shadows or decorative gradients.
3. Type: Inter for text; JetBrains Mono for small labels, codes, table headers and eyebrows. Use the existing clamp() heading sizes.
4. Reuse components: .card, .tag, .btn(.p), .eyebrow, .g2/.g3/.g4, .stats, .viewer, .tw (table wrapper). New components use radius 10px and 1px --line borders.
5. Projects, certs, WBS, parameters and drawings are data arrays in `main.js`. Edit the data, not generated HTML.
6. One shared CSS file; JS is main.js (data + UI) and hero-3d.js (hero background, three.js r128 from cdnjs). Keep the hero overlay gradient so text stays readable. No frameworks, no build step.
## Responsive contract (keep consistent)
- Desktop > 1024px: .g2 2 cols, .g4 4 cols, .stats 6 cols, .split 2 cols.
- Tablet <= 1024px: .g4 2 cols, .stats 3 cols, .split 1 col. <= 820px: hero 1 col, .g3 2 cols, burger menu.
- Mobile <= 600px: all grids 1 col, .stats 2 cols, hero buttons full width, SLD viewer 260px tall.
- Tables scroll horizontally inside .tw; the page must never scroll sideways.
- Tap targets >= 40px, visible focus outlines, reduced motion respected.
## Cloudflare Pages
Static root deploy with relative paths only (../assets/... from /projects/). Keep _headers, _redirects, wrangler.toml. New project pages go in /projects/ and copy header, footer and modal markup from electrical-distribution.html.
## Before finishing
Check at 1280, 820 and 390px: no horizontal overflow, images have alt and loading="lazy", links work from root and /projects/.
