import { motion } from 'motion/react';
import { Keyboard, Eye, Contrast, FileText, Volume2, Accessibility } from 'lucide-react';

export default function A11yLab() {
  const checks = [
    { icon: Keyboard, label: 'Keyboard Navigation', desc: 'All interactive elements are focusable and operable via keyboard.' },
    { icon: Eye, label: 'Visible Focus Rings', desc: 'High-contrast focus indicators on all interactive elements.' },
    { icon: Contrast, label: 'Color Contrast', desc: 'Text meets WCAG 2.1 AA contrast ratios (≥4.5:1 for normal text).' },
    { icon: FileText, label: 'Semantic HTML', desc: 'Proper heading hierarchy, landmarks, and ARIA labels.' },
    { icon: Volume2, label: 'Screen Reader Labels', desc: 'Descriptive alt text, aria-labels, and live regions where needed.' },
    { icon: Accessibility, label: 'Reduced Motion', desc: 'Respects prefers-reduced-motion media query.' },
  ];

  return (
    <section id="a11y" className="py-20 md:py-28 bg-bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Accessibility Laboratory</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Demonstrating WCAG 2.1 AA principles through interactive checks and live examples.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {checks.map((check, i) => (
            <motion.div
              key={check.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-all"
            >
              <check.icon className="w-8 h-8 text-accent-cyan mb-4" />
              <h3 className="text-lg font-bold mb-2">{check.label}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{check.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
