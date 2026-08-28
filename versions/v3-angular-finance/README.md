# Rajesh Koyi — Angular Finance Portfolio (Version 3)

Angular 15 frontend + Spring Boot backend representing the TIAA retirement-finance era (October 2022 – June 2024).

## Tech Stack

* Angular 15.2
* TypeScript
* RxJS
* Angular HttpClient
* SCSS
* Spring Boot 3.2.5 backend
* Maven

## Running

### Backend (port 8082)

```bash
cd versions/v3-angular-finance/backend
mvn spring-boot:run
```

### Frontend (port 4200)

```bash
cd versions/v3-angular-finance/frontend
npm install
ng serve
```

Open http://localhost:4200 in your browser.

## Project Structure

```
versions/v3-angular-finance/
  content-adapter/
    portfolio.json          # Generated from shared/content.js
  backend/
    pom.xml
    src/main/java/...
    src/main/resources/
      data/portfolio.json
      application.properties
  frontend/
    src/
      app/
        models/
        services/
        components/
      styles.scss
      index.html
```

## Sections

1. TIAA-era hero
2. Retirement-platform overview (CRS Portal, Secure Income Account)
3. Impact metrics (all sourced from shared content)
4. Angular component-system section
5. API-performance case study
6. Security and trust section
7. Delivery pipeline section
8. Reliability and integration section
9. Career-evolution navigation
10. Footer

## Content Source

Portfolio data is loaded from the backend API (`/api/portfolio`), which reads from the generated JSON adapter. Do not hardcode resume facts in Angular templates.

## Accessibility

* WCAG 2.1 AA baseline
* Semantic landmarks
* Skip link
* Keyboard navigation
* Visible focus states
* `prefers-reduced-motion` support

## Validation

```bash
# Frontend
cd frontend
ng build

# Backend
cd backend
mvn clean test
mvn clean package
```

## Notes

* Angular 15 is intentionally preserved for historical technology accuracy matching the resume (TIAA era: October 2022 – June 2024).
* Angular CLI version: 15.2.11. Angular framework version: 15.2.10.
* Node compatibility: Angular 15 officially supports Node 18.19+ / 20.x. This environment runs Node 24.14.0, which shows an "Unsupported" warning during `ng version`. Build, compilation, and dev server still operate correctly.
* Recommended local Node version: 18.19.x or 20.x for full compatibility. Do not change the global Node runtime for this project.
* Current environment result: Angular 15 builds and serves successfully on Node 24.14.0 with a warning.
* CORS is configured for `http://localhost:4200` only.
* No database, authentication, or external APIs required.

## Angular Compatibility

| Item | Value |
|------|-------|
| Angular CLI | 15.2.11 |
| Angular | 15.2.10 |
| Node (current env) | 24.14.0 (Unsupported warning, builds succeed) |
| Recommended Node | 18.19.x or 20.x |
| Reason for Angular 15 | Historical accuracy — resume specifies Angular 15 during TIAA era |
| Deviation | None; Angular 15 runs on Node 24 with warning only |
