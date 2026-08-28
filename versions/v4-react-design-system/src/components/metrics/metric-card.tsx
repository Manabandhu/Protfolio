import { motion } from 'motion/react';

interface MetricCardProps {
  value: string;
  label: string;
  detail: string;
  delay?: number;
}

export default function MetricCard({ value, label, detail, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-xl border border-border bg-bg-card hover:border-border-hover hover:-translate-y-1 transition-all"
    >
      <div className="text-3xl md:text-4xl font-black text-accent-amber mb-2 font-mono">{value}</div>
      <div className="text-sm font-semibold text-text-primary mb-1">{label}</div>
      <div className="text-xs text-text-muted">{detail}</div>
    </motion.div>
  );
}
