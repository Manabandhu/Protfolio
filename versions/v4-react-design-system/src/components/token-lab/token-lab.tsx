import { useState } from 'react';
import { Palette, RotateCcw } from 'lucide-react';

const themes = {
  indigo: { accent: '#818cf8', hover: '#a5b4fc' },
  violet: { accent: '#a78bfa', hover: '#c4b5fd' },
  cyan: { accent: '#22d3ee', hover: '#67e8f9' },
  amber: { accent: '#f59e0b', hover: '#fbbf24' },
};

const radii = ['0rem', '0.375rem', '0.75rem', '1.25rem'];
const densities = ['compact', 'comfortable', 'spacious'];
const sizes = ['sm', 'md', 'lg'];

export default function TokenLab() {
  const [theme, setTheme] = useState<keyof typeof themes>('indigo');
  const [radius, setRadius] = useState('0.75rem');
  const [density, setDensity] = useState('comfortable');
  const [size, setSize] = useState('md');
  const [reducedMotion, setReducedMotion] = useState(false);

  const t = themes[theme];

  return (
    <section id="token-lab" className="py-20 md:py-28 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Token Laboratory</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-indigo to-accent-amber rounded-full mx-auto" />
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Interactive design-token playground. Adjust tokens to see how components respond across the system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 rounded-xl border border-border bg-bg-card">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-accent-indigo" />
                Controls
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Accent Color</label>
                  <div className="flex gap-2">
                    {Object.keys(themes).map((key) => (
                      <button
                        key={key}
                        onClick={() => setTheme(key as keyof typeof themes)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${theme === key ? 'border-white scale-110' : 'border-transparent'}`}
                        style={{ backgroundColor: themes[key as keyof typeof themes].accent }}
                        aria-label={`${key} theme`}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Border Radius</label>
                  <div className="flex gap-2 flex-wrap">
                    {radii.map((r) => (
                      <button
                        key={r}
                        onClick={() => setRadius(r)}
                        className={`px-3 py-1.5 text-xs font-medium rounded border transition-all ${radius === r ? 'border-accent-indigo bg-accent-indigo/10 text-accent-indigo' : 'border-border text-text-muted hover:text-text-primary'}`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Spacing Density</label>
                  <div className="flex gap-2">
                    {densities.map((d) => (
                      <button
                        key={d}
                        onClick={() => setDensity(d)}
                        className={`px-3 py-1.5 text-xs font-medium rounded border transition-all ${density === d ? 'border-accent-indigo bg-accent-indigo/10 text-accent-indigo' : 'border-border text-text-muted hover:text-text-primary'}`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Component Size</label>
                  <div className="flex gap-2">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`px-3 py-1.5 text-xs font-medium rounded border transition-all ${size === s ? 'border-accent-indigo bg-accent-indigo/10 text-accent-indigo' : 'border-border text-text-muted hover:text-text-primary'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-text-secondary">Reduced Motion</label>
                  <button
                    onClick={() => setReducedMotion(!reducedMotion)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${reducedMotion ? 'bg-accent-indigo' : 'bg-bg-tertiary'}`}
                    role="switch"
                    aria-checked={reducedMotion}
                  >
                    <span className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${reducedMotion ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>

                <button
                  onClick={() => { setTheme('indigo'); setRadius('0.75rem'); setDensity('comfortable'); setSize('md'); setReducedMotion(false); }}
                  className="flex items-center gap-2 text-xs text-text-muted hover:text-accent-amber transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset to defaults
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-8 rounded-xl border border-border bg-bg-card" style={{ borderRadius: radius }}>
              <h3 className="text-lg font-bold mb-6">Live Preview</h3>

              <div className={`space-y-4 ${density === 'compact' ? 'space-y-3' : density === 'spacious' ? 'space-y-6' : 'space-y-4'}`}>
                <div className="flex flex-wrap gap-3">
                  <button
                    style={{ backgroundColor: t.accent, borderRadius: radius }}
                    className="px-4 py-2 text-white font-semibold hover:opacity-90 transition-opacity"
                  >
                    Primary Action
                  </button>
                  <button
                    style={{ borderRadius: radius }}
                    className="px-4 py-2 border border-border text-text-primary font-semibold hover:border-accent-indigo transition-colors"
                  >
                    Secondary
                  </button>
                  <button
                    style={{ borderRadius: radius }}
                    className="px-4 py-2 text-text-muted font-medium opacity-50 cursor-not-allowed"
                    disabled
                  >
                    Disabled
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Default', 'Success', 'Warning', 'Error'].map((status) => (
                    <span
                      key={status}
                      style={{ borderRadius: radius }}
                      className={`px-3 py-1 text-xs font-semibold ${
                        status === 'Default' ? 'bg-bg-tertiary text-text-secondary' :
                        status === 'Success' ? 'bg-emerald-500/20 text-emerald-400' :
                        status === 'Warning' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {status}
                    </span>
                  ))}
                </div>

                <div
                  style={{ borderRadius: radius }}
                  className="p-4 border border-border bg-bg-secondary"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-sm font-medium text-text-primary">System Operational</span>
                  </div>
                  <p className="text-xs text-text-muted">All services healthy. Last checked 2 minutes ago.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
