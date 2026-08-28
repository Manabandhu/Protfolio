/* =========================================
   Rajesh Koyi — Enterprise Java Portfolio
   V2 JavaScript
   ========================================= */

// ---------- Helpers ----------
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ---------- Animated Metric Counters ----------
function initMetricCounters() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const counters = $$('.metric-value[data-target]');

  if (prefersReducedMotion) {
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target, 10);
      const suffix = counter.dataset.suffix || '';
      counter.textContent = target + suffix;
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.target, 10);
        const suffix = counter.dataset.suffix || '';
        const duration = 1800;
        const startTime = performance.now();
        const startVal = 0;

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(startVal + (target - startVal) * eased);
          counter.textContent = current + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + suffix;
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// ---------- Scroll Reveal ----------
function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    $$('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  $$('.reveal').forEach(el => observer.observe(el));
}

// ---------- Active Nav ----------
function initActiveNav() {
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link');
  const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: `-${headerHeight}px 0px -40% 0px`
  });

  sections.forEach(section => observer.observe(section));
}

// ---------- Mobile Menu ----------
function initMobileMenu() {
  const toggle = $('#menu-toggle');
  const navList = $('.nav-list');
  const navLinks = $$('.nav-link');

  if (!toggle || !navList) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-nav') && navList.classList.contains('open')) {
      toggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('open');
    }
  });
}

// ---------- Theme Toggle ----------
function initThemeToggle() {
  const toggle = $('#theme-toggle');
  if (!toggle) return;

  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'dark');

  document.documentElement.setAttribute('data-theme', theme);
  updateToggleIcon(theme);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateToggleIcon(next);
  });
}

function updateToggleIcon(theme) {
  const icon = $('.theme-icon');
  if (!icon) return;
  icon.textContent = theme === 'dark' ? '◐' : '◉';
}

// ---------- Smooth Scroll ----------
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = $(targetId);
      if (!target) return;

      e.preventDefault();
      const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

// ---------- Service Health Indicators ----------
function initServiceHealth() {
  const indicators = $$('.node-indicator');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    indicators.forEach(ind => {
      ind.style.boxShadow = `0 0 0 0 ${getComputedStyle(ind).backgroundColor}`;
      ind.style.animation = 'pulse 2s ease-in-out infinite';
    });
  }
}

// ---------- Init ----------
function init() {
  initMetricCounters();
  initScrollReveal();
  initActiveNav();
  initMobileMenu();
  initThemeToggle();
  initSmoothScroll();
  initServiceHealth();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
