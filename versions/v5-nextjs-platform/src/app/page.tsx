import { getPortfolioData } from '../lib/portfolio';
import { Metadata } from 'next';
import HeroClient from './hero-client';
import MetricsClient from './metrics-client';
import ArchitectureClient from './architecture-client';
import ImpactClient from './impact-client';
import EvolutionClient from './evolution-client';
import FooterClient from './footer-client';

export const metadata: Metadata = {
  title: 'Rajesh Koyi — Next.js Platform Portfolio',
  description: 'Goldman Sachs platform-engineering era. Next.js 14, React, Nx, micro-frontends, AWS, and distributed financial systems.',
};

export default async function Home() {
  const data = await getPortfolioData();
  const gsMetrics = data.metrics?.goldmanSachs || {};
  const productAreas = Array.isArray(gsMetrics.productAreas) ? gsMetrics.productAreas : [
    'Benefits', 'Compensation', 'Deferred Compensation', 'Equity Awards', 'Stock Plans', 'Carry', 'Wealth Management'
  ];

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <HeroClient name={data.meta.name} />

      <section id="products" className="py-20 md:py-28 bg-bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Financial-Product Constellation</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {productAreas.map((area, i) => (
              <div key={area} className="p-4 rounded-xl border border-border bg-bg-card text-center hover:border-border-hover transition-colors">
                <span className="text-sm font-semibold text-text-secondary">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MetricsClient metrics={gsMetrics} />

      <section id="architecture" className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Nx & Micro-Frontend Architecture</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          </div>
          <ArchitectureClient />
        </div>
      </section>

      <section id="events" className="py-20 md:py-28 bg-bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Event-Driven Processing</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'User Action', desc: 'Next.js interface captures user interaction' },
              { title: 'Spring Boot Service', desc: 'Business logic and validation layer' },
              { title: 'AWS Lambda / SQS', desc: 'Event-driven processing and audit trail' },
              { title: 'Observability', desc: 'Prometheus metrics and distributed tracing' },
              { title: 'Security', desc: 'SAML 2.0, OAuth 2.0, OIDC, JWT lifecycle' },
              { title: 'Resilience', desc: 'Circuit breakers, retries, and graceful degradation' },
            ].map((step, i) => (
              <div key={step.title} className="p-6 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-colors">
                <div className="text-xs font-mono text-accent-amber mb-2">Step {i + 1}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Secure Access</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'SAML 2.0', desc: 'Enterprise single sign-on for 15,000+ users' },
              { title: 'OAuth 2.0', desc: ' delegated authorization and token lifecycle' },
              { title: 'OpenID Connect', desc: 'Identity layer on top of OAuth 2.0' },
              { title: 'Least-Privilege IAM', desc: 'Role-based access across financial products' },
              { title: 'OWASP', desc: 'Top 10 mitigation and security review practices' },
              { title: 'Zero Critical CVEs', desc: '12+ consecutive months without critical vulnerabilities' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-colors">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="design-system" className="py-20 md:py-28 bg-bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">React Design-System Case Study</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              From Version 4 design-system laboratory to production adoption across five product teams.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '60+ Components', desc: 'Shared React library with full TypeScript coverage' },
              { title: '5 Product Teams', desc: 'Adopted across Benefits, Compensation, and Wealth Management' },
              { title: '95% UI Consistency', desc: 'Design-system compliance verified via automated tests' },
              { title: '60% Faster Handoff', desc: 'Figma-to-code workflow with design tokens' },
              { title: 'Storybook Docs', desc: 'Component documentation with usage examples' },
              { title: 'Version 4', desc: 'See the design-system laboratory evolution stage', href: '../v4-react-design-system/' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-colors">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
                {item.href && (
                  <a href={item.href} className="inline-block mt-3 text-sm font-semibold text-accent-amber hover:text-accent-amber-hover transition-colors">
                    View V4 →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="performance" className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Performance Engineering</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '48%', label: 'First Contentful Paint', desc: 'Improvement via RSC and caching' },
              { value: '31%', label: 'Memory Footprint', desc: 'Client-side reduction' },
              { value: '35%', label: 'P1 Incidents', desc: 'Reduction via observability' },
              { value: '93%', label: 'Test Coverage', desc: 'Up from 58%' },
            ].map((item) => (
              <div key={item.label} className="p-6 rounded-xl border border-border bg-bg-card text-center hover:border-border-hover transition-colors">
                <div className="text-3xl font-black text-accent-amber mb-1 font-mono">{item.value}</div>
                <div className="text-sm font-semibold text-text-primary mb-1">{item.label}</div>
                <div className="text-xs text-text-muted">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai" className="py-20 md:py-28 bg-bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">AI-Augmented Engineering</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'GitHub Copilot Agents', desc: 'Automated test synthesis and code generation' },
              { title: 'Claude AI Agents', desc: 'Documentation assistance and PR reviews' },
              { title: 'Devin AI', desc: 'Autonomous bug fixing and refactoring' },
              { title: 'Coverage 58% → 93%', desc: 'AI-assisted test generation' },
              { title: 'Faster Reviews', desc: 'Reduced review and delivery effort' },
              { title: 'Engineering Productivity', desc: 'Verified workflow improvements' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-colors">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="observability" className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Observability & Reliability</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Prometheus', desc: 'Metrics collection and alerting across 10+ microservices' },
              { title: 'Grafana', desc: 'Real-time dashboards for SLA and performance monitoring' },
              { title: '10+ Microservices', desc: 'Distributed system with event-driven communication' },
              { title: '35% Fewer P1 Incidents', desc: 'Proactive observability and faster root-cause analysis' },
              { title: 'Zero Critical CVEs', desc: '12+ consecutive months of secure deployments' },
              { title: 'Security Review', desc: 'SAST, penetration testing, and OWASP practices' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-colors">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EvolutionClient versions={data.versions} />
      <FooterClient name={data.meta.name} />
    </main>
  );
}
