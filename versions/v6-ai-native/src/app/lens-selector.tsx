'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Lens } from '@/types/portfolio';

const LENSES: { id: Lens; label: string; description: string }[] = [
  { id: 'recruiter', label: 'Recruiter', description: 'Full-stack experience and impact' },
  { id: 'engineering-leader', label: 'Engineering Leader', description: 'Delivery, reliability, and team outcomes' },
  { id: 'frontend-architect', label: 'Frontend Architect', description: 'Design systems, accessibility, and UI engineering' },
  { id: 'platform-engineer', label: 'Platform Engineer', description: 'Cloud, infrastructure, and distributed systems' },
  { id: 'ai-engineer', label: 'AI-Augmented Engineer', description: 'AI-assisted workflows and test automation' },
];

export default function LensSelector() {
  const [active, setActive] = useState<Lens>('recruiter');

  return (
    <section className="py-16 md:py-24 bg-bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Audience Lens</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Select a viewing lens to highlight the most relevant skills, experience, and evidence. This is a deterministic interactive portfolio view.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {LENSES.map((lens, i) => (
            <motion.button
              key={lens.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              onClick={() => setActive(lens.id)}
              className={`px-5 py-2.5 text-sm font-medium rounded-xl border transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-accent-indigo ${
                active === lens.id ? 'border-accent-indigo bg-accent-indigo/10 text-accent-indigo' : 'border-border text-text-muted hover:text-text-primary'
              }`}
            >
              <span className="block text-text-primary">{lens.label}</span>
              <span className="block text-xs text-text-muted mt-0.5">{lens.description}</span>
            </motion.button>
          ))}
        </div>

        <motion.div layout className="mt-8 p-6 rounded-xl border border-border bg-bg-card">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Viewing as: {LENSES.find(l => l.id === active)?.label}</p>
          <p className="text-sm text-text-secondary">
            {active === 'recruiter' && 'Full-stack engineer with enterprise experience at Goldman Sachs, TIAA, and Wipro/FedEx.'}
            {active === 'engineering-leader' && 'Platform-focused engineer delivering 35% faster feature delivery and 35% fewer P1 incidents.'}
            {active === 'frontend-architect' && 'Design-system leader who built 60+ shared components and achieved 95% UI consistency.'}
            {active === 'platform-engineer' && 'Cloud and infrastructure engineer with AWS, Kubernetes, Terraform, and event-driven architecture.'}
            {active === 'ai-engineer' && 'AI-augmented engineer using Copilot, Claude, and Devin to raise test coverage from 58% to 93%.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
