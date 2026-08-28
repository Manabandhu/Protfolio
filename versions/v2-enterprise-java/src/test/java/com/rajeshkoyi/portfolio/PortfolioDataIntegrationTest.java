package com.rajeshkoyi.portfolio;

import com.rajeshkoyi.portfolio.model.PortfolioData;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class PortfolioDataIntegrationTest {

    @Autowired
    private PortfolioData portfolioData;

    @Test
    void contextLoads() {
        assertThat(portfolioData).isNotNull();
    }

    @Test
    void metricsAreLoadedFromContentData() {
        assertThat(portfolioData.getMetrics()).isNotNull();
        assertThat(portfolioData.getMetrics()).containsKey("wiproFedEx");

        @SuppressWarnings("unchecked")
        Map<String, Object> wiproFedEx = (Map<String, Object>) portfolioData.getMetrics().get("wiproFedEx");

        assertThat(wiproFedEx).containsKeys(
            "throughputImprovement",
            "mttrReduction",
            "downtimeReduction",
            "incidentReduction",
            "portalRenderImprovement",
            "customerSatisfactionImprovement",
            "postMergeDefectReduction",
            "annualShipmentOperations",
            "teamSizeCodeReviews",
            "productionSupportSquadSize",
            "enterpriseApplicationsBuilt",
            "splunkServices",
            "storedProceduresOptimized"
        );

        assertThat(wiproFedEx.get("throughputImprovement")).isEqualTo("22%");
        assertThat(wiproFedEx.get("mttrReduction")).isEqualTo("45%");
        assertThat(wiproFedEx.get("downtimeReduction")).isEqualTo("30%");
        assertThat(wiproFedEx.get("incidentReduction")).isEqualTo("25%");
        assertThat(wiproFedEx.get("portalRenderImprovement")).isEqualTo("35%");
        assertThat(wiproFedEx.get("customerSatisfactionImprovement")).isEqualTo("18%");
        assertThat(wiproFedEx.get("postMergeDefectReduction")).isEqualTo("20%");
        assertThat(wiproFedEx.get("annualShipmentOperations")).isEqualTo("$500M+");
        assertThat(wiproFedEx.get("teamSizeCodeReviews")).isEqualTo("20");
        assertThat(wiproFedEx.get("productionSupportSquadSize")).isEqualTo("5");
        assertThat(wiproFedEx.get("enterpriseApplicationsBuilt")).isEqualTo("3");
        assertThat(wiproFedEx.get("splunkServices")).isEqualTo("8");
        assertThat(wiproFedEx.get("storedProceduresOptimized")).isEqualTo("40+");
    }

    @Test
    void goldmanSachsMetricsAlsoPresent() {
        assertThat(portfolioData.getMetrics()).containsKey("goldmanSachs");

        @SuppressWarnings("unchecked")
        Map<String, Object> gs = (Map<String, Object>) portfolioData.getMetrics().get("goldmanSachs");

        assertThat(gs).containsKeys("products", "dailyTransactions", "users");
        assertThat(gs.get("products")).isEqualTo("8+");
        assertThat(gs.get("dailyTransactions")).isEqualTo("500K+");
        assertThat(gs.get("users")).isEqualTo("15,000+");
    }
}
