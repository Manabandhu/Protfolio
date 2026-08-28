'use client';

import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroClient({ name, title, location, availability }: { name: string; title: string; location: string; availability: string }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(99,102,241,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(6,182,212,0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1) 0%, transparent 60%)'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-secondary/50 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent-amber" />
          <span className="text-sm font-medium text-text-secondary tracking-wide uppercase">AI-Native Engineer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight mb-4 bg-gradient-to-r from-text-primary via-accent-indigo to-accent-cyan bg-clip-text text-transparent"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-semibold text-accent-amber mb-2"
        >
          {title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-text-secondary max-w-2xl mx-auto mb-4"
        >
          {location}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-sm text-accent-mint mb-10"
        >
          {availability}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-text-secondary max-w-2xl mx-auto mb-10"
        >
          Senior engineer specializing in full-stack platforms, frontend architecture, cloud infrastructure, and AI-augmented engineering. Building scalable financial systems and design systems at Goldman Sachs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="#capabilities" className="px-6 py-3 bg-accent-indigo text-white rounded-lg font-semibold hover:bg-accent-indigo-hover transition-colors inline-flex items-center gap-2">
            Explore Capabilities <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#evolution" className="px-6 py-3 border border-border text-text-primary rounded-lg font-semibold hover:border-accent-indigo hover:text-accent-indigo transition-colors">
            View Evolution
          </a>
        </motion.div>
      </div>
    </section>
  );
}
