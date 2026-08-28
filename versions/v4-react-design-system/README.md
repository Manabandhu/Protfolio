# Rajesh Koyi — React Design-System Portfolio (Version 4)

React 18 + TypeScript + Vite + Tailwind CSS portfolio representing a design-system specialization stage.

## Tech Stack

* React 18.3
* TypeScript 6.0
* Vite 8.2
* Tailwind CSS 4.3
* Motion 13.1
* Lucide React 1.35

## Running

```bash
cd versions/v4-react-design-system
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
versions/v4-react-design-system/
  content-adapter/
    portfolio.json          # Generated from shared/content.js
  public/
    portfolio.json          # Static JSON consumed by React app
  src/
    types/
      portfolio.ts          # TypeScript interfaces
    data/
      portfolio.ts          # fetchPortfolio() helper
    components/
      hero/
      metrics/
      token-lab/
      gallery/
      figma/
      a11y/
      architecture/
      impact/
      evolution/
      footer/
    App.tsx
    main.tsx
    index.css               # Tailwind CSS v4 + custom design tokens
```

## Sections

1. Design-system hero
2. Design-system impact metrics (60+ components, 5 teams, 95% consistency, 60% handoff reduction)
3. Interactive token laboratory (theme, radius, density, size, reduced-motion controls)
4. Reusable component gallery (buttons, badges, cards, tabs, inputs, metric cards, data tables, alerts, timeline items, modal states)
5. Figma-to-code case study
6. Accessibility laboratory
7. Architecture section
8. Engineering impact section
9. Career evolution navigation
10. Footer

## Content Source

Portfolio data is loaded from `public/portfolio.json`, generated from the shared content source (`shared/content.js`). Do not manually duplicate resume facts.

## Validation

```bash
npm run build
```

## Notes

* No backend required
* Consumes static JSON via fetch
* All metrics bound to data; no hardcoded resume values in components
