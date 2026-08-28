# Rajesh Koyi — Enterprise Java Portfolio (Version 2)

Spring Boot server-rendered portfolio representing the Wipro/FedEx enterprise logistics era (January 2020 – August 2021).

## Tech Stack

* Java 17 (compatible with Java 25 runtime)
* Spring Boot 3.2.5
* Thymeleaf server-side templates
* Semantic HTML5
* CSS3 with custom properties
* Progressive-enhancement JavaScript
* Maven build tool

## Running the Application

```bash
cd versions/v2-enterprise-java

# Build and run
mvn spring-boot:run

# Or build JAR and run
mvn clean package
java -jar target/portfolio-v2-enterprise-java-0.1.0.jar
```

The application starts on port **8081** (configured in `application.properties`).

Open http://localhost:8081 in your browser.

## Content Source

Portfolio data is loaded from `src/main/resources/data/portfolio.json`, which is generated from the shared content source (`shared/content.js`) via a one-way adapter. Do not manually duplicate resume facts. Update `shared/content.js` first, then regenerate the JSON if needed.

## Sections

1. Enterprise Logistics Hero
2. Operations Impact Dashboard (animated counters)
3. Enterprise Architecture (Java/Spring Boot, Oracle, Redis, Docker/K8s, Splunk)
4. Production Support Lifecycle (expandable timeline)
5. FedEx Customer Portal (IceFaces optimization metrics)
6. Engineering Principles
7. Portfolio Evolution (all 6 versions)
8. Contact Area

## Accessibility

* WCAG 2.1 AA baseline
* Semantic HTML5 landmarks
* ARIA labels
* Keyboard navigation
* Visible focus states
* `prefers-reduced-motion` support

## Validation

```bash
mvn clean verify
mvn test
```

## Notes

* No database, authentication, or external APIs required
* Runs standalone with embedded Tomcat
* V1 remains independently usable at `versions/v1-klu-foundation/`
