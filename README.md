# Rajesh Koyi — Portfolio Evolution

A premium, award-quality portfolio website showing career and technology evolution through six distinct portfolio versions.

## Quick Start: Version 1 (KLU Foundation)

Version 1 is a pure static site with no build step or dependencies.

```bash
# Open directly in a browser
open versions/v1-klu-foundation/index.html

# Or serve with any static file server
npx serve versions/v1-klu-foundation
python3 -m http.server 8080 --directory versions/v1-klu-foundation
```

## Repository Structure

```
/workspaces/Protfolio/
  README.md                    # This file
  PORTFOLIO_ROADMAP.md         # Six-version evolution roadmap
  VERSION_ARCHITECTURE.md      # Architecture documentation
  shared/
    content.js                 # Single source of truth for all portfolio data
  versions/
    v1-klu-foundation/         # Active: KLU Foundation Portfolio
      index.html
      css/styles.css
      js/main.js
```

## Design Direction

- Premium dark editorial/futuristic visual style
- Default dark mode with optional light mode
- Indigo, slate, white, and amber accent palette
- Strong typography and generous whitespace
- Scroll-driven section reveals
- Smooth timeline transitions
- Interactive technology evolution
- Responsive on mobile, tablet, desktop, and foldable layouts
- WCAG 2.1 AA accessibility
- Keyboard navigation and visible focus states
- Respects `prefers-reduced-motion`

## Version 1 Sections

- Hero
- Career Foundation
- Education (KL University focus)
- Publication (Maze-Solving Robot)
- Skills Foundation
- Career Timeline
- Portfolio Evolution (all 6 versions)
- Contact Area
- Professional Footer

## Future Versions

See `PORTFOLIO_ROADMAP.md` for planned versions V2 through V6. Each version will be added in its own directory under `versions/` without modifying existing versions.

## Content Source

All portfolio data lives in `shared/content.js`. Do not hardcode content in version-specific files. Import from the shared source instead.

## Accessibility

This site targets WCAG 2.1 AA compliance with semantic HTML, ARIA labels, keyboard navigation, visible focus states, and reduced-motion support.

## License

Private portfolio. Not for redistribution.
