'use client';

import { motion } from 'motion/react';
import { PortfolioVersion } from '@/types/portfolio';

export default function PortfolioEvolutionHub({ versions }: { versions: PortfolioVersion[] }) {
  return (
    <section id="evolution-hub" className="py-20 md:py-28 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Portfolio Evolution Hub</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Launch all portfolio versions. Each version is independently runnable and demonstrates a different stage of engineering maturity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {versions.map((ver, i) => (
            <motion.a
              key={ver.id}
              href={
                ver.id === 'v1' ? '../v1-klu-foundation/index.html' :
                ver.id === 'v2' ? '../v2-enterprise-java/' :
                ver.id === 'v3' ? '../v3-angular-finance/frontend' :
                ver.id === 'v4' ? '../v4-react-design-system/' :
                ver.id === 'v5' ? '../v5-nextjs-platform/' :
                '#'
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`block p-6 rounded-xl border transition-all hover:-translate-y-1 ${
                ver.status === 'active' ? 'border-accent-indigo bg-accent-indigo/5 hover:border-accent-indigo' : 'border-border bg-bg-card hover:border-border-hover'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-2 h-2 rounded-full ${ver.status === 'active' ? 'bg-accent-indigo' : 'bg-text-muted'}`} />
                <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  {ver.status === 'active' ? 'Current' : 'Planned'}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-1">{ver.name}</h3>
              <p className="text-xs text-text-muted mb-2">{ver.period}</p>
              <p className="text-xs text-accent-indigo font-medium mb-2">{ver.technology}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{ver.description}</p>
              {ver.id === 'v6' && (
                <span className="inline-block mt-4 text-xs font-semibold text-accent-amber">Active Now</span>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
