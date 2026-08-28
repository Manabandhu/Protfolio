import type { PortfolioData } from '../../types/portfolio';

export default function Footer({ data }: { data: PortfolioData }) {
  return (
    <footer className="border-t border-border bg-bg-secondary py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-lg font-bold">{data.meta.name}</span>
          <span className="text-text-muted">|</span>
          <span className="text-sm text-text-muted">React Design-System Era</span>
        </div>
        <p className="text-xs text-text-muted font-mono mb-1">React 18 · TypeScript · Tailwind CSS · Vite · Motion</p>
        <p className="text-xs text-text-muted">Version 4 — Portfolio Evolution Stage. Built with reusable component architecture.</p>
      </div>
    </footer>
  );
}
