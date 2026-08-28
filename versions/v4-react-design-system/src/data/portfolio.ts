import type { PortfolioData } from '../types/portfolio';

export async function fetchPortfolio(): Promise<PortfolioData> {
  const response = await fetch('/portfolio.json');
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  return response.json();
}
