import { motion } from 'motion/react';
import { Box, Type, PaintBucket, Component, Puzzle } from 'lucide-react';

const layers = [
  { icon: Type, title: 'Design Tokens', desc: 'Primitive values for color, typography, spacing, and elevation.' },
  { icon: PaintBucket, title: 'Token Layer', desc: 'Semantic tokens mapped to primitives for consistent theming.' },
  { icon: Component, title: 'Shared Primitives', desc: 'Base components: Button, Badge, Card, Input, Tabs, Alert.' },
  { icon: Puzzle, title: 'Feature Components', desc: 'Composed components built from primitives for specific domains.' },
  { icon: Box, title: 'Application Composition', desc: 'Page-level layouts and feature modules using the component library.' },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-20 md:py-28 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">System Architecture</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            From design tokens to application composition, a layered architecture for scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-all"
            >
              <layer.icon className="w-8 h-8 text-accent-violet mb-4" />
              <h3 className="text-lg font-bold mb-2">{layer.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{layer.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
