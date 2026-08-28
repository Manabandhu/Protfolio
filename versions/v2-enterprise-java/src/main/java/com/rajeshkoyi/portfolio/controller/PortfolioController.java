package com.rajeshkoyi.portfolio.controller;

import com.rajeshkoyi.portfolio.model.PortfolioData;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortfolioController {

    private final PortfolioData portfolioData;

    public PortfolioController(PortfolioData portfolioData) {
        this.portfolioData = portfolioData;
    }

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("portfolio", portfolioData);
        return "index";
    }
}
