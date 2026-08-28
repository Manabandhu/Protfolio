import type { PortfolioData } from '../../types/portfolio';
import MetricCard from './metric-card';

export default function Metrics({ data }: { data: PortfolioData }) {
  const m = data.metrics['reactDesignSystem'] || {};
  const metrics = [
    { value: m.componentCount || '60+', label: 'Components Built', detail: 'Shared React component library' },
    { value: m.productTeams || '5', label: 'Product Teams', detail: 'Adopted across organization' },
    { value: m.uiConsistency || '95%', label: 'UI Consistency', detail: 'Design-system compliance' },
    { value: m.handoffReduction || '60%', label: 'Faster Handoff', detail: 'Designer-to-developer workflow' },
  ];

  return (
    <section id="impact" className="py-20 md:py-28 bg-bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Design-System Impact</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} {...metric} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
