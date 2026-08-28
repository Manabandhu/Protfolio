import rawData from '../../public/portfolio.json';
import { PortfolioData } from '@/types/portfolio';

export function getPortfolioData(): PortfolioData {
  return rawData as unknown as PortfolioData;
}

export function getLensContent(lens: string) {
  const lensSkills: Record<string, string[]> = {
    recruiter: ['React', 'Next.js', 'TypeScript', 'Angular', 'Java', 'Spring Boot', 'AWS', 'Kubernetes'],
    'engineering-leader': ['Nx', 'Micro-frontends', 'CI/CD', 'Team Delivery', 'Observability', 'Security'],
    'frontend-architect': ['React', 'Next.js', 'TypeScript', 'Design Systems', 'Storybook', 'Tailwind CSS', 'Accessibility'],
    'platform-engineer': ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Spring Boot', 'GraphQL', 'Prometheus'],
    'ai-engineer': ['GitHub Copilot', 'Claude AI', 'Devin AI', 'LangChain', 'Test Automation', 'AI-Augmented Workflows'],
  };

  const lensSummary: Record<string, string> = {
    recruiter: 'Full-stack engineer with enterprise experience at Goldman Sachs, TIAA, and Wipro/FedEx.',
    'engineering-leader': 'Platform-focused engineer delivering 35% faster feature delivery and 35% fewer P1 incidents.',
    'frontend-architect': 'Design-system leader who built 60+ shared components and achieved 95% UI consistency.',
    'platform-engineer': 'Cloud and infrastructure engineer with AWS, Kubernetes, Terraform, and event-driven architecture.',
    'ai-engineer': 'AI-augmented engineer using Copilot, Claude, and Devin to raise test coverage from 58% to 93%.',
  };

  return {
    skills: lensSkills[lens] || [],
    summary: lensSummary[lens] || '',
  };
}
