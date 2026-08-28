import { motion } from 'motion/react';
import { TrendingUp, Repeat, Clock, Users } from 'lucide-react';

export default function Impact() {
  const items = [
    { icon: TrendingUp, value: '95%', label: 'UI Consistency', desc: 'Design-system compliance across products' },
    { icon: Repeat, value: '60%', label: 'Less Handoff Time', desc: 'Faster designer-to-developer workflow' },
    { icon: Clock, value: '60+', label: 'Components', desc: 'Shared React library adopted by teams' },
    { icon: Users, value: '5', label: 'Product Teams', desc: 'Cross-team adoption and governance' },
  ];

  return (
    <section id="impact" className="py-20 md:py-28 bg-bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Engineering Impact</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-bg-card text-center hover:border-border-hover transition-all"
            >
              <item.icon className="w-8 h-8 text-accent-amber mx-auto mb-3" />
              <div className="text-3xl font-black text-accent-amber mb-1 font-mono">{item.value}</div>
              <div className="text-sm font-semibold text-text-primary mb-1">{item.label}</div>
              <div className="text-xs text-text-muted">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
