import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PortfolioData } from '../../models/portfolio.model';

@Component({
  selector: 'app-security',
  standalone: false,
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  portfolio: PortfolioData | null = null;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getPortfolio().subscribe(data => this.portfolio = data);
  }
}
