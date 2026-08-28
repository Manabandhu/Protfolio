import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import HeroClient from '../app/hero-client';
import LensSelector from '../app/lens-selector';
import ImpactCommandCenter from '../app/impact-command-center';
import FooterClient from '../app/footer-client';

describe('V6 AI-Native Portfolio', () => {
  it('HeroClient renders name, title, location, and availability', () => {
    render(<HeroClient name="Rajesh Koyi" title="Senior Software Engineer" location="Dallas, Texas" availability="Open to remote work and relocation" />);
    expect(screen.getByText('Rajesh Koyi')).toBeInTheDocument();
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Dallas, Texas')).toBeInTheDocument();
    expect(screen.getByText('Open to remote work and relocation')).toBeInTheDocument();
  });

  it('LensSelector renders all five lenses', () => {
    render(<LensSelector onLensChange={() => {}} />);
    expect(screen.getByText('Recruiter')).toBeInTheDocument();
    expect(screen.getByText('Engineering Leader')).toBeInTheDocument();
    expect(screen.getByText('Frontend Architect')).toBeInTheDocument();
    expect(screen.getByText('Platform Engineer')).toBeInTheDocument();
    expect(screen.getByText('AI-Augmented Engineer')).toBeInTheDocument();
  });

  it('ImpactCommandCenter renders verified metrics', () => {
    const metrics = {
      goldmanSachs: {
        products: '8+',
        dailyTransactions: '500K+',
        users: '15,000+',
        codeDuplicationReduction: '42%',
        featureDeliveryFaster: '35%',
        testCoverageAfter: '93%',
        firstContentfulPaintImprovement: '48%',
        clientMemoryFootprintReduction: '31%',
        p1IncidentReduction: '35%',
        criticalCveFreeMonths: '12+',
      },
      reactDesignSystem: {
        componentCount: '60+',
        uiConsistency: '95%',
        handoffReduction: '60%',
      },
    };
    render(<ImpactCommandCenter metrics={metrics} />);
    expect(screen.getByText('Impact Command Center')).toBeInTheDocument();
    expect(screen.getByText('8+')).toBeInTheDocument();
    expect(screen.getByText('500K+')).toBeInTheDocument();
    expect(screen.getByText('15,000+')).toBeInTheDocument();
    expect(screen.getByText('42%')).toBeInTheDocument();
    expect(screen.getByText('60+')).toBeInTheDocument();
    expect(screen.getByText('95%')).toBeInTheDocument();
  });

  it('ImpactCommandCenter renders fallbacks for missing metrics', () => {
    render(<ImpactCommandCenter metrics={{}} />);
    const dashes = screen.getAllByText('—');
    expect(dashes.length).toBeGreaterThan(0);
  });

  it('FooterClient renders name and tech stack', () => {
    render(<FooterClient name="Rajesh Koyi" />);
    expect(screen.getByText('Rajesh Koyi')).toBeInTheDocument();
    expect(screen.getByText('AI-Native Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Next.js 16 · React 19 · TypeScript · Tailwind · Motion')).toBeInTheDocument();
  });
});
