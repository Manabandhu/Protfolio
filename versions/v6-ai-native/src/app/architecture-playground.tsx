'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { Box, GitBranch, Component, Puzzle, Cloud, Server, Shield, Activity, Brain } from 'lucide-react';

const layers = [
  { icon: GitBranch, title: 'Nx Monorepo', desc: 'Dependency boundaries and shared libraries across applications.' },
  { icon: Component, title: 'Shared UI Library', desc: '60+ React components with TypeScript contracts and Storybook documentation.' },
  { icon: Puzzle, title: 'Micro-frontends', desc: 'Independent Next.js applications with Module Federation and runtime integration.' },
  { icon: Server, title: 'Spring Boot Services', desc: 'REST APIs and GraphQL gateways for business logic and validation.' },
  { icon: Cloud, title: 'AWS Services', desc: 'Lambda, SQS, EKS, and event-driven processing for scalable workloads.' },
  { icon: Box, title: 'Application Composition', desc: 'Page-level layouts and feature modules composed at runtime.' },
  { icon: Shield, title: 'Security Layer', desc: 'SAML 2.0, OAuth 2.0, OIDC, JWT lifecycle, and least-privilege IAM.' },
  { icon: Activity, title: 'Observability', desc: 'Prometheus metrics, Grafana dashboards, and distributed tracing across 10+ services.' },
  { icon: Brain, title: 'AI-Assisted Engineering', desc: 'GitHub Copilot Agents, Claude AI Agents, Devin AI, and LangChain for test synthesis and review support.' },
];

export default function ArchitecturePlayground() {
  const [selected, setSelected] = useState<string | null>(null);
  const layer = layers.find(l => l.title === selected);

  return (
    <section id="architecture" className="py-20 md:py-28 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Platform Architecture</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Interactive system view of a modern financial platform. Select a layer to explore verified engineering context.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {layers.map((layer, i) => (
            <motion.button
              key={layer.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              onClick={() => setSelected(layer.title)}
              className={`p-5 rounded-xl border text-left transition-all hover:border-border-hover focus-visible:outline-2 focus-visible:outline-accent-indigo ${
                selected === layer.title ? 'border-accent-indigo bg-accent-indigo/10' : 'border-border bg-bg-card'
              }`}
            >
              <layer.icon className="w-6 h-6 text-accent-indigo mb-3" />
              <h3 className="text-sm font-bold mb-1">{layer.title}</h3>
              <p className="text-xs text-text-muted line-clamp-2">{layer.desc}</p>
            </motion.button>
          ))}
        </div>

        {layer && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-6 rounded-xl border border-accent-indigo bg-accent-indigo/5"
          >
            <div className="flex items-start gap-4">
              <layer.icon className="w-8 h-8 text-accent-indigo mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-2">{layer.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{layer.desc}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
