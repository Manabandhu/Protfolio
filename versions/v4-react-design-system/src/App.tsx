import { useState, useEffect } from 'react';
import type { PortfolioData } from './types/portfolio';
import { fetchPortfolio } from './data/portfolio';
import Hero from './components/hero/hero';
import Metrics from './components/metrics/metrics';
import TokenLab from './components/token-lab/token-lab';
import Gallery from './components/gallery/gallery';
import FigmaCaseStudy from './components/figma/figma-case-study';
import A11yLab from './components/a11y/a11y-lab';
import Architecture from './components/architecture/architecture';
import Impact from './components/impact/impact';
import Evolution from './components/evolution/evolution';
import Footer from './components/footer/footer';

function App() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPortfolio()
      .then(setData)
      .catch(() => setError('Failed to load portfolio data'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-accent-indigo border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-text-muted">Loading design system...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary">
        <p className="text-red-400">{error || 'Unknown error'}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Hero />
      <Metrics data={data} />
      <TokenLab />
      <Gallery />
      <FigmaCaseStudy />
      <A11yLab />
      <Architecture />
      <Impact />
      <Evolution data={data} />
      <Footer data={data} />
    </div>
  );
}

export default App;
