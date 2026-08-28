package com.rajeshkoyi.portfolio.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rajeshkoyi.portfolio.model.PortfolioData;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import java.io.InputStream;

@Configuration
public class PortfolioConfig {

    @Bean
    public PortfolioData portfolioData(ObjectMapper objectMapper) throws Exception {
        ClassPathResource resource = new ClassPathResource("data/portfolio.json");
        try (InputStream is = resource.getInputStream()) {
            return objectMapper.readValue(is, PortfolioData.class);
        }
    }
}
