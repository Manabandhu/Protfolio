'use client';

import { motion } from 'motion/react';
import { Box, GitBranch, Component, Puzzle, Cloud, Server } from 'lucide-react';

const layers = [
  { icon: GitBranch, title: 'Nx Monorepo', desc: 'Dependency boundaries and shared libraries' },
  { icon: Component, title: 'Shared UI Library', desc: '60+ React components with TypeScript contracts' },
  { icon: Puzzle, title: 'Micro-frontends', desc: 'Independent Next.js applications with Module Federation' },
  { icon: Server, title: 'Spring Boot Services', desc: 'REST APIs and GraphQL gateways' },
  { icon: Cloud, title: 'AWS Services', desc: 'Lambda, SQS, EKS, and event-driven processing' },
  { icon: Box, title: 'Application Composition', desc: 'Page-level layouts and feature modules' },
];

export default function ArchitectureClient() {
  return (
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
          <layer.icon className="w-8 h-8 text-accent-indigo mb-4" />
          <h3 className="text-lg font-bold mb-2">{layer.title}</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{layer.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
