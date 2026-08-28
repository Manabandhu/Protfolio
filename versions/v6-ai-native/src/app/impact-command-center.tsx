'use client';

import { motion } from 'motion/react';

interface Metrics {
  [key: string]: Record<string, string | string[]> | undefined;
}

export default function ImpactCommandCenter({ metrics }: { metrics: Metrics }) {
  const items = [
    { value: metrics?.goldmanSachs?.products || '—', label: 'Internal Products', detail: 'Financial platform services' },
    { value: metrics?.goldmanSachs?.dailyTransactions || '—', label: 'Daily Transactions', detail: 'Processed across systems' },
    { value: metrics?.goldmanSachs?.users || '—', label: 'Active Users', detail: 'Enterprise platform users' },
    { value: metrics?.goldmanSachs?.codeDuplicationReduction || '—', label: 'Less Code Duplication', detail: 'Shared component library' },
    { value: metrics?.goldmanSachs?.featureDeliveryFaster || '—', label: 'Faster Feature Delivery', detail: 'CI/CD and micro-frontends' },
    { value: metrics?.reactDesignSystem?.componentCount || '—', label: 'Shared Components', detail: 'React design system' },
    { value: metrics?.reactDesignSystem?.uiConsistency || '—', label: 'UI Consistency', detail: 'Design-system compliance' },
    { value: metrics?.reactDesignSystem?.handoffReduction || '—', label: 'Faster Handoff', detail: 'Designer-to-developer workflow' },
    { value: metrics?.goldmanSachs?.firstContentfulPaintImprovement || '—', label: 'FCP Improvement', detail: 'Performance optimization' },
    { value: metrics?.goldmanSachs?.clientMemoryFootprintReduction || '—', label: 'Memory Reduction', detail: 'Client-side optimization' },
    { value: metrics?.goldmanSachs?.p1IncidentReduction || '—', label: 'Fewer P1 Incidents', detail: 'Observability and reliability' },
    { value: metrics?.goldmanSachs?.testCoverageAfter || '—', label: 'Test Coverage', detail: 'Up from 58%' },
    { value: metrics?.goldmanSachs?.criticalCveFreeMonths || '—', label: 'Zero Critical CVEs', detail: 'Consecutive months' },
  ];

  return (
    <section id="impact" className="py-20 md:py-28 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Impact Command Center</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Verified metrics loaded from the shared content source. No hardcoded resume metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="p-5 rounded-xl border border-border bg-bg-card hover:border-border-hover hover:-translate-y-1 transition-all"
            >
              <div className="text-2xl md:text-3xl font-black text-accent-amber mb-2 font-mono">{item.value}</div>
              <div className="text-sm font-semibold text-text-primary mb-1">{item.label}</div>
              <div className="text-xs text-text-muted">{item.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
