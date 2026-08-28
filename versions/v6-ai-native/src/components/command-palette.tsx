'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Command } from 'lucide-react';
import { getPortfolioData } from '@/lib/portfolio';
import { Lens } from '@/types/portfolio';

const LENSES: { id: Lens; label: string; description: string }[] = [
  { id: 'recruiter', label: 'Recruiter', description: 'Full-stack experience and impact' },
  { id: 'engineering-leader', label: 'Engineering Leader', description: 'Delivery, reliability, and team outcomes' },
  { id: 'frontend-architect', label: 'Frontend Architect', description: 'Design systems, accessibility, and UI engineering' },
  { id: 'platform-engineer', label: 'Platform Engineer', description: 'Cloud, infrastructure, and distributed systems' },
  { id: 'ai-engineer', label: 'AI-Augmented Engineer', description: 'AI-assisted workflows and test automation' },
];

export default function CommandPalette({ data }: { data: ReturnType<typeof getPortfolioData> }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [lens, setLens] = useState<Lens>('recruiter');

  const lensContent = useMemo(() => {
    const skills: Record<string, string[]> = {
      recruiter: ['React', 'Next.js', 'TypeScript', 'Angular', 'Java', 'Spring Boot', 'AWS', 'Kubernetes'],
      'engineering-leader': ['Nx', 'Micro-frontends', 'CI/CD', 'Team Delivery', 'Observability', 'Security'],
      'frontend-architect': ['React', 'Next.js', 'TypeScript', 'Design Systems', 'Storybook', 'Tailwind CSS', 'Accessibility'],
      'platform-engineer': ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Spring Boot', 'GraphQL', 'Prometheus'],
      'ai-engineer': ['GitHub Copilot', 'Claude AI', 'Devin AI', 'LangChain', 'Test Automation', 'AI-Augmented Workflows'],
    };
    const summaries: Record<string, string> = {
      recruiter: 'Full-stack engineer with enterprise experience at Goldman Sachs, TIAA, and Wipro/FedEx.',
      'engineering-leader': 'Platform-focused engineer delivering 35% faster feature delivery and 35% fewer P1 incidents.',
      'frontend-architect': 'Design-system leader who built 60+ shared components and achieved 95% UI consistency.',
      'platform-engineer': 'Cloud and infrastructure engineer with AWS, Kubernetes, Terraform, and event-driven architecture.',
      'ai-engineer': 'AI-augmented engineer using Copilot, Claude, and Devin to raise test coverage from 58% to 93%.',
    };
    return { skills: skills[lens] || [], summary: summaries[lens] || '' };
  }, [lens]);

  const filteredMetrics = useMemo(() => {
    const all = [
      { label: 'Products', value: data.metrics?.goldmanSachs?.products || '—' },
      { label: 'Daily Transactions', value: data.metrics?.goldmanSachs?.dailyTransactions || '—' },
      { label: 'Active Users', value: data.metrics?.goldmanSachs?.users || '—' },
      { label: 'UI Consistency', value: data.metrics?.reactDesignSystem?.uiConsistency || '—' },
      { label: 'Test Coverage', value: data.metrics?.goldmanSachs?.testCoverageAfter || '—' },
    ];
    if (!query) return all;
    return all.filter(m => {
      const valueStr = typeof m.value === 'string' ? m.value : JSON.stringify(m.value);
      return m.label.toLowerCase().includes(query.toLowerCase()) || valueStr.toLowerCase().includes(query.toLowerCase());
    });
  }, [query, data.metrics]);

  const filteredCaseStudies = useMemo(() => {
    const studies = [
      { id: 'architecture', title: 'Financial Platform Architecture', tech: ['Next.js', 'Nx', 'Micro-frontends', 'AWS'] },
      { id: 'design-system', title: 'Design-System Delivery', tech: ['React', 'TypeScript', 'Storybook', 'Tailwind'] },
      { id: 'security', title: 'Authentication and Security', tech: ['OAuth 2.0', 'SAML 2.0', 'JWT', 'OWASP'] },
      { id: 'performance', title: 'Performance Engineering', tech: ['React Server Components', 'Caching', 'Memoization'] },
      { id: 'events', title: 'Event-Driven Processing', tech: ['AWS Lambda', 'SQS', 'Spring Boot', 'GraphQL'] },
      { id: 'ai', title: 'AI-Assisted Testing and Delivery', tech: ['GitHub Copilot', 'Claude AI', 'Devin AI'] },
    ];
    if (!query) return studies;
    return studies.filter(s => s.title.toLowerCase().includes(query.toLowerCase()) || s.tech.some(t => t.toLowerCase().includes(query.toLowerCase())));
  }, [query]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 right-4 z-40 flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-bg-secondary/80 backdrop-blur-sm text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
        aria-label="Open command palette"
      >
        <Search className="w-4 h-4" />
        <span className="text-sm hidden sm:inline">Search capabilities...</span>
        <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono text-text-muted border border-border rounded">
          <Command className="w-3 h-3" /> K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-2xl bg-bg-secondary border border-border rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                <Search className="w-5 h-5 text-text-muted" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search metrics, case studies, technologies..."
                  className="flex-1 bg-transparent text-text-primary placeholder:text-text-muted outline-none text-sm"
                />
                <kbd className="px-2 py-0.5 text-xs font-mono text-text-muted border border-border rounded">ESC</kbd>
              </div>

              <div className="flex gap-2 px-4 py-3 border-b border-border overflow-x-auto">
                {LENSES.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setLens(l.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all whitespace-nowrap ${
                      lens === l.id ? 'border-accent-indigo bg-accent-indigo/10 text-accent-indigo' : 'border-border text-text-muted hover:text-text-primary'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <div className="p-4 max-h-[60vh] overflow-y-auto">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Viewing as: {LENSES.find(l => l.id === lens)?.label}</p>
                <p className="text-sm text-text-secondary mb-4">{lensContent.summary}</p>

                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Highlighted Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {lensContent.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs font-medium rounded-md border border-border bg-bg-card text-text-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Verified Metrics</h3>
                  <div className="space-y-2">
                    {filteredMetrics.map((m) => (
                      <div key={m.label} className="flex items-center justify-between p-2 rounded-lg border border-border bg-bg-card">
                        <span className="text-sm text-text-secondary">{m.label}</span>
                        <span className="text-sm font-mono font-semibold text-accent-amber">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Case Studies</h3>
                  <div className="space-y-2">
                    {filteredCaseStudies.map((study) => (
                      <div key={study.id} className="p-2 rounded-lg border border-border bg-bg-card">
                        <p className="text-sm font-medium text-text-primary">{study.title}</p>
                        <p className="text-xs text-text-muted">{study.tech.join(' · ')}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-4 py-2 border-t border-border flex items-center justify-between">
                <span className="text-xs text-text-muted">Deterministic portfolio view — no external APIs</span>
                <button onClick={() => setOpen(false)} className="text-text-muted hover:text-text-primary transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
