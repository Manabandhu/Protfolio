import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PortfolioData } from '../../models/portfolio.model';

@Component({
  selector: 'app-architecture',
  standalone: false,
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent implements OnInit {
  portfolio: PortfolioData | null = null;
  latencyBefore = 320;
  latencyAfter = 95;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getPortfolio().subscribe(data => this.portfolio = data);
  }
}
