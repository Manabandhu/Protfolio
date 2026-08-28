import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import HeroClient from '../app/hero-client';
import MetricsClient from '../app/metrics-client';
import ArchitectureClient from '../app/architecture-client';
import FooterClient from '../app/footer-client';

describe('V5 Client Components', () => {
  it('HeroClient renders name and tagline', () => {
    render(<HeroClient name="Rajesh Koyi" />);
    expect(screen.getByText('Rajesh Koyi')).toBeInTheDocument();
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
  });

  it('HeroClient renders CTA buttons', () => {
    render(<HeroClient name="Rajesh Koyi" />);
    expect(screen.getByText('Explore Platform')).toBeInTheDocument();
    expect(screen.getByText('View Architecture')).toBeInTheDocument();
  });

  it('MetricsClient renders platform impact metrics', () => {
    const metrics = {
      products: '8+',
      dailyTransactions: '500K+',
      users: '15,000+',
      codeDuplicationReduction: '42%',
      featureDeliveryFaster: '35%',
      testCoverageAfter: '93%',
      firstContentfulPaintImprovement: '48%',
      clientMemoryFootprintReduction: '31%',
      p1IncidentReduction: '35%',
    };
    render(<MetricsClient metrics={metrics} />);
    expect(screen.getByText('Platform Impact')).toBeInTheDocument();
    expect(screen.getByText('8+')).toBeInTheDocument();
    expect(screen.getByText('500K+')).toBeInTheDocument();
    expect(screen.getByText('15,000+')).toBeInTheDocument();
  });

  it('ArchitectureClient renders architecture layers', () => {
    render(<ArchitectureClient />);
    expect(screen.getByText('Nx Monorepo')).toBeInTheDocument();
    expect(screen.getByText('Shared UI Library')).toBeInTheDocument();
    expect(screen.getByText('Micro-frontends')).toBeInTheDocument();
  });

  it('FooterClient renders name and tech stack', () => {
    render(<FooterClient name="Rajesh Koyi" />);
    expect(screen.getByText('Rajesh Koyi')).toBeInTheDocument();
    expect(screen.getByText('Next.js Platform Era')).toBeInTheDocument();
    expect(screen.getByText('Next.js 14 · React 18 · TypeScript · Nx · AWS')).toBeInTheDocument();
  });
});
