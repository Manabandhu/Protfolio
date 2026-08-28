package com.rajeshkoyi.portfolio.controller;

import com.rajeshkoyi.portfolio.model.PortfolioData;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin(origins = "http://localhost:4200")
public class PortfolioController {

    private final PortfolioData portfolioData;

    public PortfolioController(PortfolioData portfolioData) {
        this.portfolioData = portfolioData;
    }

    @GetMapping
    public ResponseEntity<PortfolioData> getPortfolio() {
        return ResponseEntity.ok(portfolioData);
    }
}
