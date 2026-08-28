'use client';

import { motion } from 'motion/react';
import { GitPullRequest, Code, FileSearch, FileText, CheckCircle, UserCheck, Rocket } from 'lucide-react';

const steps = [
  { icon: GitPullRequest, title: 'Problem Framing', desc: 'Define the engineering problem, acceptance criteria, and verification approach.' },
  { icon: Code, title: 'Code Assistance', desc: 'Use GitHub Copilot Agents, Claude AI Agents, and Devin AI for implementation support.' },
  { icon: FileSearch, title: 'Review Support', desc: 'AI-assisted PR reviews, security checks, and pattern validation.' },
  { icon: FileText, title: 'Documentation', desc: 'Automated documentation generation and architecture decision records.' },
  { icon: CheckCircle, title: 'Validation', desc: 'Automated testing, coverage analysis, and CI/CD pipeline verification.' },
  { icon: UserCheck, title: 'Human Approval', desc: 'Engineer review, sign-off, and production-readiness confirmation.' },
  { icon: Rocket, title: 'Delivery', desc: 'Production deployment with observability, monitoring, and feedback loops.' },
];

export default function AIWorkflow() {
  return (
    <section id="ai-workflow" className="py-20 md:py-28 bg-bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">AI-Augmented Engineering Workflow</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Safe, high-level workflow showing verified AI-assisted practices. No private prompts, chain-of-thought, or confidential data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="p-5 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-all"
            >
              <step.icon className="w-6 h-6 text-accent-amber mb-3" />
              <h3 className="text-sm font-bold mb-1">{step.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { value: '58% → 93%', label: 'Test Coverage Improvement', desc: 'AI-assisted test generation' },
            { value: '35%', label: 'Faster Feature Delivery', desc: 'CI/CD and AI-augmented workflows' },
            { value: 'Verified', label: 'Human Approval Required', desc: 'Engineer sign-off before production' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="p-5 rounded-xl border border-border bg-bg-card text-center hover:border-border-hover transition-all"
            >
              <div className="text-2xl font-black text-accent-amber mb-1 font-mono">{item.value}</div>
              <div className="text-sm font-semibold text-text-primary mb-1">{item.label}</div>
              <div className="text-xs text-text-muted">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
