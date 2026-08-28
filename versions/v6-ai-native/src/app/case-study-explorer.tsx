'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CaseStudy } from '@/types/portfolio';

const caseStudies: CaseStudy[] = [
  {
    id: 'architecture',
    title: 'Financial Platform Architecture',
    challenge: 'Modernize a legacy retirement platform to support 5M+ customers with 99.95% availability.',
    approach: 'Modularized backend with Spring Boot, introduced GraphQL gateway, and built shared frontend libraries.',
    technologies: ['Next.js', 'Nx', 'Micro-frontends', 'Spring Boot', 'GraphQL', 'AWS'],
    outcome: 'API response improved from 320ms to 95ms. Deployment failures reduced by 70%.',
    evidence: 'Resume-backed experience at TIAA.',
  },
  {
    id: 'design-system',
    title: 'Design-System Delivery',
    challenge: 'Eliminate UI inconsistency across five product teams and reduce designer-to-developer handoff time.',
    approach: 'Built a shared React component library with TypeScript, Storybook documentation, and design tokens.',
    technologies: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Vite', 'Testing Library'],
    outcome: '60+ components delivered. 95% UI consistency. 60% faster handoff.',
    evidence: 'Resume-backed experience at TIAA and Goldman Sachs.',
  },
  {
    id: 'security',
    title: 'Authentication and Security',
    challenge: 'Secure access for 15,000+ enterprise users across multiple financial products.',
    approach: 'Implemented SAML 2.0 SSO, OAuth 2.0 delegated authorization, OIDC identity layer, and least-privilege IAM.',
    technologies: ['SAML 2.0', 'OAuth 2.0', 'OpenID Connect', 'JWT', 'Spring Security', 'OWASP'],
    outcome: 'Zero critical CVEs for 12+ consecutive months.',
    evidence: 'Resume-backed experience at Goldman Sachs and TIAA.',
  },
  {
    id: 'performance',
    title: 'Performance Engineering',
    challenge: 'Improve frontend performance and reduce client-side resource consumption.',
    approach: 'Adopted React Server Components, optimized caching strategies, and introduced memoization patterns.',
    technologies: ['Next.js', 'React Server Components', 'CDN Caching', 'Memoization', 'Webpack'],
    outcome: '48% First Contentful Paint improvement. 31% lower client memory footprint.',
    evidence: 'Resume-backed experience at Goldman Sachs.',
  },
  {
    id: 'events',
    title: 'Event-Driven Processing',
    challenge: 'Process high-volume financial transactions with audit trails and resilience.',
    approach: 'Introduced AWS Lambda and SQS for event ingestion, Spring Boot for business logic, and circuit breakers.',
    technologies: ['AWS Lambda', 'SQS', 'Spring Boot', 'GraphQL', 'Prometheus', 'Grafana'],
    outcome: '35% fewer P1 incidents through proactive observability.',
    evidence: 'Resume-backed experience at Goldman Sachs.',
  },
  {
    id: 'ai',
    title: 'AI-Assisted Testing and Delivery',
    challenge: 'Raise test coverage from 58% to 93% without increasing team headcount.',
    approach: 'Integrated GitHub Copilot Agents, Claude AI Agents, and Devin AI for test synthesis and review support.',
    technologies: ['GitHub Copilot', 'Claude AI', 'Devin AI', 'LangChain', 'Vitest', 'Playwright'],
    outcome: 'Test coverage increased from 58% to 93%. Faster review and delivery effort.',
    evidence: 'Resume-backed experience at Goldman Sachs.',
  },
];

export default function CaseStudyExplorer() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Case-Study Explorer</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Expandable case studies with verified challenge, approach, technologies, and outcome.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((cs, i) => (
            <motion.button
              key={cs.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              onClick={() => setExpanded(expanded === cs.id ? null : cs.id)}
              className={`p-5 rounded-xl border text-left transition-all hover:border-border-hover focus-visible:outline-2 focus-visible:outline-accent-indigo ${
                expanded === cs.id ? 'border-accent-indigo bg-accent-indigo/5' : 'border-border bg-bg-card'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold">{cs.title}</h3>
                <ChevronDown className={`w-4 h-4 text-text-muted transition-transform ${expanded === cs.id ? 'rotate-180' : ''}`} />
              </div>
              <p className="text-xs text-text-muted line-clamp-2">{cs.challenge}</p>

              <AnimatePresence>
                {expanded === cs.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-border overflow-hidden"
                  >
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Challenge</h4>
                        <p className="text-sm text-text-secondary">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Approach</h4>
                        <p className="text-sm text-text-secondary">{cs.approach}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Technologies</h4>
                        <div className="flex flex-wrap gap-1">
                          {cs.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-0.5 text-xs font-medium rounded-md border border-border bg-bg-card text-text-secondary">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Outcome</h4>
                        <p className="text-sm text-accent-mint">{cs.outcome}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Evidence</h4>
                        <p className="text-xs text-text-muted">{cs.evidence}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
