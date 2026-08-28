import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PortfolioData } from '../../models/portfolio.model';

@Component({
  selector: 'app-platform-metrics',
  standalone: false,
  templateUrl: './platform-metrics.component.html',
  styleUrls: ['./platform-metrics.component.scss']
})
export class PlatformMetricsComponent implements OnInit {
  portfolio: PortfolioData | null = null;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getPortfolio().subscribe(data => this.portfolio = data);
  }

  get metrics() {
    return this.portfolio?.metrics?.['tiaa'] || {};
  }
}
