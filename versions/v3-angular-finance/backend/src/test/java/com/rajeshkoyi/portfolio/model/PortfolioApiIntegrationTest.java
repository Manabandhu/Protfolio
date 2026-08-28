package com.rajeshkoyi.portfolio.model;

import com.rajeshkoyi.portfolio.model.PortfolioData;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PortfolioApiIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void getPortfolio_returns200AndJsonContentType() {
        ResponseEntity<String> response = restTemplate.getForEntity("/api/portfolio", String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getHeaders().getContentType()).isEqualTo(MediaType.APPLICATION_JSON);
    }

    @Test
    void getPortfolio_returnsExpectedStructure() {
        ResponseEntity<PortfolioData> response = restTemplate.getForEntity("/api/portfolio", PortfolioData.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isNotNull();

        PortfolioData data = response.getBody();
        assertThat(data.getMeta()).isNotNull();
        assertThat(data.getMeta().getName()).isEqualTo("Rajesh Koyi");
        assertThat(data.getContact()).isNotNull();
        assertThat(data.getEducation()).isNotNull();
        assertThat(data.getExperience()).isNotNull();
        assertThat(data.getSkills()).isNotNull();
        assertThat(data.getMetrics()).isNotNull();
        assertThat(data.getPublications()).isNotNull();
        assertThat(data.getVersions()).isNotNull();
    }

    @Test
    void getPortfolio_tiaaMetricsLoadedFromContentData() {
        ResponseEntity<PortfolioData> response = restTemplate.getForEntity("/api/portfolio", PortfolioData.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isNotNull();

        Map<String, Object> metrics = response.getBody().getMetrics();
        assertThat(metrics).containsKey("tiaa");
        assertThat(metrics).containsKey("wiproFedEx");
        assertThat(metrics).containsKey("goldmanSachs");

        @SuppressWarnings("unchecked")
        Map<String, Object> tiaa = (Map<String, Object>) metrics.get("tiaa");

        assertThat(tiaa).containsKeys(
            "apiResponseBefore",
            "apiResponseAfter",
            "reusableComponents",
            "productLines",
            "customers",
            "apiAvailability",
            "batchBefore",
            "batchAfter",
            "deploymentFailureReduction",
            "deliveryLeadTimeBefore",
            "deliveryLeadTimeAfter",
            "uiDevTimeReduction",
            "userBaseGrowth",
            "onTimeSprintDelivery",
            "sprintQuarters"
        );

        assertThat(tiaa.get("apiResponseBefore")).isEqualTo("320ms");
        assertThat(tiaa.get("apiResponseAfter")).isEqualTo("95ms");
        assertThat(tiaa.get("reusableComponents")).isEqualTo("40+");
        assertThat(tiaa.get("productLines")).isEqualTo("4");
        assertThat(tiaa.get("customers")).isEqualTo("5M+");
        assertThat(tiaa.get("apiAvailability")).isEqualTo("99.95%");
        assertThat(tiaa.get("batchBefore")).isEqualTo("4.5 hours");
        assertThat(tiaa.get("batchAfter")).isEqualTo("55 minutes");
        assertThat(tiaa.get("deploymentFailureReduction")).isEqualTo("70%");
        assertThat(tiaa.get("deliveryLeadTimeBefore")).isEqualTo("3 days");
        assertThat(tiaa.get("deliveryLeadTimeAfter")).isEqualTo("4 hours");
        assertThat(tiaa.get("uiDevTimeReduction")).isEqualTo("30%");
        assertThat(tiaa.get("userBaseGrowth")).isEqualTo("12%");
        assertThat(tiaa.get("onTimeSprintDelivery")).isEqualTo("97%");
        assertThat(tiaa.get("sprintQuarters")).isEqualTo("7");
    }
}
