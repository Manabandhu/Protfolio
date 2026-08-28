import { PortfolioData } from '@/types/portfolio';

export async function getPortfolioData(): Promise<PortfolioData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/portfolio.json`, {
    cache: 'force-cache',
  });
  if (!res.ok) {
    throw new Error(`Failed to load portfolio data: ${res.status}`);
  }
  return res.json();
}
