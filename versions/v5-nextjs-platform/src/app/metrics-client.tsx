'use client';

import { motion } from 'motion/react';

export default function MetricsClient({ metrics }: { metrics: Record<string, string> }) {
  const items = [
    { value: metrics.products || '8+', label: 'Internal Products', detail: 'Financial platform services' },
    { value: metrics.dailyTransactions || '500K+', label: 'Daily Transactions', detail: 'Processed across systems' },
    { value: metrics.users || '15,000+', label: 'Active Users', detail: 'Enterprise platform users' },
    { value: metrics.codeDuplicationReduction || '42%', label: 'Less Duplication', detail: 'Shared component library' },
    { value: metrics.featureDeliveryFaster || '35%', label: 'Faster Delivery', detail: 'CI/CD and micro-frontends' },
    { value: metrics.testCoverageAfter || '93%', label: 'Test Coverage', detail: 'Up from 58%' },
    { value: metrics.firstContentfulPaintImprovement || '48%', label: 'FCP Improvement', detail: 'Performance optimization' },
    { value: metrics.clientMemoryFootprintReduction || '31%', label: 'Memory Reduction', detail: 'Client-side optimization' },
    { value: metrics.p1IncidentReduction || '35%', label: 'Fewer P1 Incidents', detail: 'Observability and reliability' },
  ];

  return (
    <section id="impact" className="py-20 md:py-28 bg-bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Platform Impact</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-xl border border-border bg-bg-card hover:border-border-hover hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl md:text-4xl font-black text-accent-amber mb-2 font-mono">{item.value}</div>
              <div className="text-sm font-semibold text-text-primary mb-1">{item.label}</div>
              <div className="text-xs text-text-muted">{item.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
