'use client';

export default function FooterClient({ name }: { name: string }) {
  return (
    <footer className="border-t border-border bg-bg-secondary py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-lg font-bold">{name}</span>
          <span className="text-text-muted">|</span>
          <span className="text-sm text-text-muted">Next.js Platform Era</span>
        </div>
        <p className="text-xs text-text-muted font-mono mb-1">Next.js 14 · React 18 · TypeScript · Nx · AWS</p>
        <p className="text-xs text-text-muted">Version 5 — Goldman Sachs Portfolio. Built with Next.js 14 App Router.</p>
      </div>
    </footer>
  );
}
