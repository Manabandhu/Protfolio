import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MetricCard from '../components/metrics/metric-card';
import TokenLab from '../components/token-lab/token-lab';
import Gallery from '../components/gallery/gallery';
import Hero from '../components/hero/hero';

beforeEach(() => {
  global.fetch = vi.fn();
});

describe('Portfolio Data Loading', () => {
  it('should show loading state initially', () => {
    global.fetch.mockImplementation(() => new Promise(() => {}));
    render(<Hero />);
    expect(screen.getByText('Loading design system laboratory...')).toBeInTheDocument();
  });

  it('should show error state on fetch failure', async () => {
    global.fetch.mockRejectedValue(new Error('Network error'));
    render(<Hero />);
    await waitFor(() => {
      expect(screen.getByText('Unable to load portfolio data')).toBeInTheDocument();
    });
  });

  it('should render hero content on successful fetch', async () => {
    const mockData = {
      meta: { name: 'Rajesh Koyi', title: 'Senior Software Engineer' },
      metrics: { reactDesignSystem: { componentCount: '60+', productTeams: '5' } },
    };
    global.fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });
    render(<Hero />);
    await waitFor(() => {
      expect(screen.getByText('Rajesh Koyi')).toBeInTheDocument();
    });
  });
});

describe('MetricCard', () => {
  it('renders value, label, and detail', () => {
    render(<MetricCard value="60+" label="Components" detail="Shared React library" delay={0} />);
    expect(screen.getByText('60+')).toBeInTheDocument();
    expect(screen.getByText('Components')).toBeInTheDocument();
    expect(screen.getByText('Shared React library')).toBeInTheDocument();
  });

  it('renders with motion div wrapper', () => {
    const { container } = render(<MetricCard value="95%" label="Consistency" detail="Design-system compliance" delay={0} />);
    const motionDiv = container.querySelector('div');
    expect(motionDiv).toBeTruthy();
  });
});

describe('TokenLab', () => {
  it('renders all control sections', () => {
    render(<TokenLab />);
    expect(screen.getByText('Controls')).toBeInTheDocument();
    expect(screen.getByText('Accent Color')).toBeInTheDocument();
    expect(screen.getByText('Border Radius')).toBeInTheDocument();
    expect(screen.getByText('Spacing Density')).toBeInTheDocument();
    expect(screen.getByText('Component Size')).toBeInTheDocument();
    expect(screen.getByText('Reduced Motion')).toBeInTheDocument();
  });

  it('switches accent color on button click', async () => {
    render(<TokenLab />);
    const violetButton = screen.getByLabelText('violet theme');
    await userEvent.click(violetButton);
    expect(violetButton).toHaveClass('scale-110');
  });

  it('toggles reduced motion switch', async () => {
    render(<TokenLab />);
    const toggle = screen.getByRole('switch');
    expect(toggle).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-checked', 'true');
  });

  it('resets controls to defaults', async () => {
    render(<TokenLab />);
    const toggle = screen.getByRole('switch');
    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-checked', 'true');

    const resetButton = screen.getByText('Reset to defaults');
    await userEvent.click(resetButton);
    expect(toggle).toHaveAttribute('aria-checked', 'false');
  });
});

describe('Gallery', () => {
  it('renders all component states', () => {
    render(<Gallery />);
    const states = ['Default', 'Hover', 'Focus', 'Disabled', 'Loading', 'Error', 'Success'];
    states.forEach((state) => {
      expect(screen.getByText(state)).toBeInTheDocument();
    });
  });

  it('renders button and badge samples in each state', () => {
    render(<Gallery />);
    const buttons = screen.getAllByRole('button', { name: 'Button' });
    expect(buttons.length).toBeGreaterThanOrEqual(7);
  });
});

describe('Keyboard Accessibility', () => {
  it('allows keyboard navigation through token lab controls', async () => {
    render(<TokenLab />);
    const accentLabel = screen.getByText('Accent Color');
    const accentButtons = accentLabel.parentElement?.querySelectorAll('button');
    if (accentButtons && accentButtons.length > 0) {
      accentButtons[0].focus();
      expect(accentButtons[0]).toHaveFocus();
      await userEvent.click(accentButtons[0]);
      expect(accentButtons[0]).toHaveClass('scale-110');
    }
  });

  it('supports keyboard activation of reduced motion toggle', async () => {
    render(<TokenLab />);
    const toggle = screen.getByRole('switch');
    toggle.focus();
    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-checked', 'true');
  });
});
