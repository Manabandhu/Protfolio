import rawData from '../../public/portfolio.json';
import { PortfolioData } from '@/types/portfolio';

export function getPortfolioData(): PortfolioData {
  return rawData as unknown as PortfolioData;
}
