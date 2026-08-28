# Version Architecture

## Directory Structure

```
/workspaces/Protfolio/
  README.md                          # Project overview and run instructions
  PORTFOLIO_ROADMAP.md               # Six-version evolution roadmap
  VERSION_ARCHITECTURE.md            # This file
  shared/
    content.js                       # Single source of truth for all portfolio data
  versions/
    v1-klu-foundation/
      index.html                      # V1 entry point
      css/
        styles.css                    # V1 styles
      js/
        main.js                       # V1 logic (loads shared/content.js)
      assets/                         # Version-specific assets
    v2-enterprise-java/               # Future version directory
      ...
    v3-angular-finance/               # Future version directory
      ...
    v4-react-design-system/           # Future version directory
      ...
    v5-nextjs-platform/               # Future version directory
      ...
    v6-ai-native/                     # Future version directory
      ...
```

## Content Layer

All versions consume data from `shared/content.js`. This file exports a single `portfolio` object containing:

- `meta` — name, title, location, target roles, availability
- `contact` — email, LinkedIn, GitHub, website (null until approved public info is added)
- `education` — institutions, degrees, periods, types
- `experience` — companies, roles, periods, descriptions, technologies
- `skills` — categorized technology lists
- `metrics` — quantitative achievements
- `publications` — papers, projects, publications
- `versions` — metadata for all six portfolio versions

### Content Rules

- Do not invent employers, dates, metrics, credentials, projects, or responsibilities.
- Do not publish private information such as date of birth, visa details, immigration history, or confidential employer information.
- Only add contact fields when approved public information is available.
- Each version renders a subset of content relevant to its era and story focus.

## Version Isolation

Each version is fully isolated:

- Its own HTML entry point
- Its own CSS (or CSS modules, or Tailwind config)
- Its own JavaScript/TypeScript layer
- Its own asset directory
- It imports from `shared/content.js` but does not modify it

Adding a new version:

1. Create `versions/vN-<name>/`
2. Add framework-specific files
3. Import `portfolio` from `../../shared/content.js`
4. Render version-appropriate sections
5. Update `PORTFOLIO_ROADMAP.md` status from `planned` to `active` for that version

## Technology Decisions by Version

| Version | Framework | Styling | Build | Special |
|---------|-----------|---------|-------|---------|
| V1 | None (vanilla) | Custom CSS | None | Intersection Observer for scroll reveals |
| V2 | Java/Spring Boot visual | Custom CSS | Maven/Gradle | Server-side rendering concepts |
| V3 | Angular 15 | SCSS | Angular CLI | NgRx, Angular Material |
| V4 | React 18 | Tailwind CSS | Vite | Storybook, atomic design |
| V5 | Next.js 14 | Tailwind CSS | Next.js | App Router, Nx monorepo |
| V6 | Next.js (latest) | Tailwind CSS | Next.js | Framer Motion, Three.js/WebGL |

## Accessibility Baseline

All versions must meet:

- WCAG 2.1 AA
- Semantic HTML5 elements
- ARIA labels and roles where needed
- Keyboard navigation (visible focus states)
- `prefers-reduced-motion` respect
- Color contrast ratios ≥ 4.5:1 for normal text
- Skip navigation links
- Proper heading hierarchy

## Deployment

- No backend, database, authentication, analytics, or contact-form infrastructure.
- Static hosting compatible.
- Preserve existing working version when deploying new versions.
