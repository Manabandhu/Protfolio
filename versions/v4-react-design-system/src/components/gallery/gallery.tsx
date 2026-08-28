import { motion } from 'motion/react';
import { CheckCircle2, Loader2, XCircle } from 'lucide-react';

const states = [
  { name: 'Default', icon: null, className: 'border-border bg-bg-card text-text-primary' },
  { name: 'Hover', icon: null, className: 'border-accent-indigo bg-accent-indigo/5 text-accent-indigo' },
  { name: 'Focus', icon: null, className: 'border-accent-amber bg-accent-amber/5 text-accent-amber ring-2 ring-accent-amber/20' },
  { name: 'Disabled', icon: null, className: 'border-border bg-bg-tertiary text-text-muted opacity-50 cursor-not-allowed' },
  { name: 'Loading', icon: Loader2, className: 'border-border bg-bg-card text-text-primary' },
  { name: 'Error', icon: XCircle, className: 'border-red-500/50 bg-red-500/5 text-red-400' },
  { name: 'Success', icon: CheckCircle2, className: 'border-emerald-500/50 bg-emerald-500/5 text-emerald-400' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Component Gallery</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Reusable React components with documented states. Built with accessibility, responsiveness, and consistency in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {states.map((state, i) => (
            <motion.div
              key={state.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`p-5 rounded-xl border ${state.className}`}
            >
              <div className="flex items-center gap-3 mb-3">
                {state.icon && <state.icon className="w-5 h-5" />}
                <span className="text-sm font-semibold">{state.name}</span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-bg-tertiary rounded-md text-xs font-medium border border-border">Button</button>
                <span className="px-2 py-1.5 bg-bg-tertiary rounded-md text-xs border border-border">Badge</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
