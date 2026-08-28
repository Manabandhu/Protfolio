'use client';

import { motion } from 'motion/react';

const capabilities = [
  { name: 'React', group: 'Frontend', connections: ['Next.js', 'TypeScript', 'Design Systems', 'Testing'] },
  { name: 'Next.js', group: 'Frontend', connections: ['React', 'TypeScript', 'AWS', 'Performance'] },
  { name: 'Angular', group: 'Frontend', connections: ['TypeScript', 'Spring Boot', 'Accessibility'] },
  { name: 'TypeScript', group: 'Frontend', connections: ['React', 'Next.js', 'Angular', 'Testing'] },
  { name: 'Java', group: 'Backend', connections: ['Spring Boot', 'AWS', 'Microservices'] },
  { name: 'Spring Boot', group: 'Backend', connections: ['Java', 'GraphQL', 'Security', 'Angular'] },
  { name: 'AWS', group: 'Cloud', connections: ['Next.js', 'Kubernetes', 'Event-Driven', 'Security'] },
  { name: 'Kubernetes', group: 'Cloud', connections: ['AWS', 'Terraform', 'Microservices'] },
  { name: 'Terraform', group: 'Cloud', connections: ['Kubernetes', 'AWS', 'Security'] },
  { name: 'Security', group: 'Cross-Cutting', connections: ['OAuth 2.0', 'SAML 2.0', 'OWASP', 'Spring Boot'] },
  { name: 'Design Systems', group: 'Frontend', connections: ['React', 'TypeScript', 'Accessibility'] },
  { name: 'Micro-frontends', group: 'Architecture', connections: ['Nx', 'Module Federation', 'Next.js'] },
  { name: 'Event-Driven', group: 'Architecture', connections: ['AWS', 'Spring Boot', 'Observability'] },
  { name: 'AI Agents', group: 'AI', connections: ['Testing', 'Documentation', 'Code Review'] },
  { name: 'Testing', group: 'Quality', connections: ['TypeScript', 'CI/CD', 'AI Agents'] },
  { name: 'Observability', group: 'Quality', connections: ['Prometheus', 'Grafana', 'Event-Driven'] },
];

const groupColors: Record<string, string> = {
  Frontend: 'text-accent-indigo border-accent-indigo/30',
  Backend: 'text-accent-blue border-accent-blue/30',
  Cloud: 'text-accent-cyan border-accent-cyan/30',
  'Cross-Cutting': 'text-accent-violet border-accent-violet/30',
  Architecture: 'text-accent-amber border-accent-amber/30',
  AI: 'text-accent-mint border-accent-mint/30',
  Quality: 'text-accent-indigo border-accent-indigo/30',
};

export default function CapabilityGraph() {
  return (
    <section id="capabilities" className="py-20 md:py-28 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Capability Graph</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Interactive map of verified skills, technologies, and their relationships across frontend, backend, cloud, and AI-augmented engineering.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className={`p-4 rounded-xl border bg-bg-card hover:border-border-hover transition-all ${groupColors[cap.group] || 'border-border'}`}
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">{cap.group}</div>
              <div className="text-sm font-bold text-text-primary mb-2">{cap.name}</div>
              <div className="flex flex-wrap gap-1">
                {cap.connections.slice(0, 3).map((conn) => (
                  <span key={conn} className="px-1.5 py-0.5 text-[10px] font-medium rounded border border-border text-text-muted">
                    {conn}
                  </span>
                ))}
                {cap.connections.length > 3 && (
                  <span className="px-1.5 py-0.5 text-[10px] font-medium rounded border border-border text-text-muted">
                    +{cap.connections.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
