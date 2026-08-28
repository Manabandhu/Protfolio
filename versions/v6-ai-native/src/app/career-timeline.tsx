'use client';

import { motion } from 'motion/react';
import { PortfolioVersion } from '@/types/portfolio';

export default function CareerTimeline({ versions }: { versions: PortfolioVersion[] }) {
  return (
    <section id="evolution" className="py-20 md:py-28 bg-bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Career Timeline</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Evidence-first career evolution from engineering foundations to AI-native leadership.
          </p>
        </div>

        <div className="space-y-6">
          {versions.map((ver, i) => (
            <motion.div
              key={ver.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`p-6 rounded-xl border transition-all ${ver.status === 'active' ? 'border-accent-indigo bg-accent-indigo/5' : 'border-border bg-bg-card hover:border-border-hover'}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`w-2 h-2 rounded-full ${ver.status === 'active' ? 'bg-accent-indigo' : 'bg-text-muted'}`} />
                <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  {ver.status === 'active' ? 'Current' : 'Planned'}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-1">{ver.name}</h3>
              <p className="text-xs text-text-muted mb-2">{ver.period}</p>
              <p className="text-xs text-accent-indigo font-medium mb-2">{ver.technology}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{ver.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
