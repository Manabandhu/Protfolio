# Rajesh Koyi — Angular Finance Portfolio Backend (Version 3)

Spring Boot read-only REST API serving portfolio data to the Angular 15 frontend.

## Tech Stack

* Java 17
* Spring Boot 3.2.5
* Maven
* JSON content adapter from `shared/content.js`

## Running

```bash
cd versions/v3-angular-finance/backend

mvn spring-boot:run
```

The API starts on port **8082**.

## Endpoint

* `GET /api/portfolio` — Returns full portfolio JSON

## CORS

Configured to allow requests from `http://localhost:4200` (Angular dev server).

## Content Source

Portfolio data is loaded from `src/main/resources/data/portfolio.json`, generated from the shared content source (`shared/content.js`). Do not manually duplicate resume facts.

## Validation

```bash
mvn clean test
mvn clean package
```

## Notes

* No database, authentication, or external APIs required
* Read-only backend; no mutation endpoints
