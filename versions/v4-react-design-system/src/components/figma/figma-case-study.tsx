import { motion } from 'motion/react';
import { GitBranch, CheckCircle2, Shield, BookOpen, Users } from 'lucide-react';

export default function FigmaCaseStudy() {
  const steps = [
    { icon: GitBranch, title: 'Design Tokens', desc: 'Single source of truth for color, typography, spacing, and elevation.' },
    { icon: CheckCircle2, title: 'Component Contracts', desc: 'Explicit props, states, and accessibility requirements for every component.' },
    { icon: Shield, title: 'Accessibility Checks', desc: 'WCAG 2.1 AA audits, contrast validation, and keyboard navigation testing.' },
    { icon: BookOpen, title: 'Documentation', desc: 'Storybook-style docs with usage examples, do/don\'t guidelines, and changelogs.' },
    { icon: Users, title: 'Team Adoption', desc: 'Rolled out across five product teams with migration guides and codemods.' },
  ];

  return (
    <section id="figma" className="py-20 md:py-28 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Figma-to-Code Workflow</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            How design tokens, component contracts, and documentation accelerated team adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-colors"
            >
              <step.icon className="w-8 h-8 text-accent-indigo mb-4" />
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
