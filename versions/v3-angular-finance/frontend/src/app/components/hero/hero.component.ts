import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PortfolioData } from '../../models/portfolio.model';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  portfolio: PortfolioData | null = null;
  loading = true;
  error: string | null = null;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getPortfolio().subscribe({
      next: data => {
        this.portfolio = data;
        this.loading = false;
      },
      error: err => {
        this.error = 'Unable to load portfolio data';
        this.loading = false;
      }
    });
  }
}
