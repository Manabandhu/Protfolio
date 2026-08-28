import { useEffect, useState } from 'react';
import type { PortfolioData } from '../../types/portfolio';
import { fetchPortfolio } from '../../data/portfolio';
import { motion } from 'motion/react';
import { Palette, Layers, Eye, Zap } from 'lucide-react';

export default function Hero() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPortfolio()
      .then(setData)
      .catch(() => setError('Unable to load portfolio data'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center" aria-label="Loading">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-accent-indigo border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-text-muted">Loading design system laboratory...</p>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="min-h-screen flex items-center justify-center" aria-label="Error">
        <div className="text-center">
          <p className="text-red-400">{error || 'Unknown error'}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(129,140,248,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245,158,11,0.1) 0%, transparent 50%)'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-secondary/50 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-amber animate-pulse" />
          <span className="text-sm font-medium text-text-secondary tracking-wide uppercase">Portfolio Evolution Stage</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight mb-4 bg-gradient-to-r from-text-primary via-accent-indigo to-accent-violet bg-clip-text text-transparent"
        >
          {data.meta.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-semibold text-accent-amber mb-2"
        >
          React Design-System Portfolio
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-text-secondary max-w-2xl mx-auto mb-10"
        >
          A portfolio evolution stage demonstrating reusable component architecture, design-system thinking, and frontend engineering maturity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="#token-lab" className="px-6 py-3 bg-accent-indigo text-white rounded-lg font-semibold hover:bg-accent-indigo-hover transition-colors">
            Open Laboratory
          </a>
          <a href="#gallery" className="px-6 py-3 border border-border text-text-primary rounded-lg font-semibold hover:border-accent-indigo hover:text-accent-indigo transition-colors">
            View Components
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: Palette, label: 'Design Tokens' },
            { icon: Layers, label: 'Component Library' },
            { icon: Eye, label: 'Accessibility' },
            { icon: Zap, label: 'Performance' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-text-muted">
              <item.icon className="w-6 h-6 text-accent-indigo" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
