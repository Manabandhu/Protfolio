import { getPortfolioData } from '@/lib/portfolio';
import { Metadata } from 'next';
import HeroClient from './hero-client';
import LensSelector from './lens-selector';
import CapabilityGraph from './capability-graph';
import CareerTimeline from './career-timeline';
import ArchitecturePlayground from './architecture-playground';
import AIWorkflow from './ai-workflow';
import ImpactCommandCenter from './impact-command-center';
import CaseStudyExplorer from './case-study-explorer';
import PortfolioEvolutionHub from './portfolio-evolution-hub';
import CommandPalette from '@/components/command-palette';
import FooterClient from './footer-client';

export const metadata: Metadata = {
  title: 'Rajesh Koyi — AI-Native Portfolio',
  description: 'AI-native engineering portfolio of Rajesh Koyi, Senior Software Engineer. Exploring capabilities, evidence, and AI-augmented engineering workflows.',
};

export default async function Home() {
  const data = getPortfolioData();

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <CommandPalette data={data} />

      <HeroClient name={data.meta.name} title={data.meta.title} location={data.meta.location} availability={data.meta.availability} />

      <LensSelector />

      <CapabilityGraph />

      <CareerTimeline versions={data.versions} />

      <ArchitecturePlayground />

      <AIWorkflow />

      <ImpactCommandCenter metrics={data.metrics} />

      <CaseStudyExplorer />

      <PortfolioEvolutionHub versions={data.versions} />

      <FooterClient name={data.meta.name} />
    </main>
  );
}
