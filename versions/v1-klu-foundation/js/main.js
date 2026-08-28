import { portfolio } from '../../shared/content.js';

/* =========================================
   Rajesh Koyi — KLU Foundation Portfolio
   V1 JavaScript
   ========================================= */

// ---------- Helpers ----------
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ---------- Render: Education ----------
function renderEducation() {
  const container = $('#education-list');
  if (!container) return;

  container.innerHTML = portfolio.education.map(edu => {
    const typeClass = edu.type === 'undergraduate' ? 'type-undergraduate' : 'type-graduate';
    const techTags = (edu.technologies || []).map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('');

    return `
      <article class="education-item ${typeClass} reveal" aria-label="${escapeHtml(edu.institution)}">
        <h3>${escapeHtml(edu.institution)}</h3>
        <p class="degree">${escapeHtml(edu.degree)}</p>
        <p class="period">${escapeHtml(edu.period)}</p>
        <p class="description">${escapeHtml(edu.description)}</p>
        ${techTags ? `<div class="tech-tags">${techTags}</div>` : ''}
      </article>
    `;
  }).join('');
}

// ---------- Render: Publication ----------
function renderPublications() {
  const container = $('#publication-list');
  if (!container) return;

  container.innerHTML = portfolio.publications.map(pub => `
    <article class="publication-item reveal" aria-label="${escapeHtml(pub.title)}">
      <h3 class="pub-title">${escapeHtml(pub.title)}</h3>
      <p class="pub-meta">${escapeHtml(pub.context)} · ${escapeHtml(pub.year)}</p>
      <p class="pub-description">${escapeHtml(pub.description)}</p>
    </article>
  `).join('');
}

// ---------- Render: Skills ----------
function renderSkills() {
  const container = $('#skills-grid');
  if (!container) return;

  container.innerHTML = Object.entries(portfolio.skills).map(([category, items]) => `
    <div class="skill-category reveal">
      <h3>${escapeHtml(category)}</h3>
      <ul>
        ${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// ---------- Render: Timeline ----------
function renderTimeline() {
  const container = $('#timeline-track');
  if (!container) return;

  container.innerHTML = portfolio.experience.map(exp => {
    const techTags = (exp.technologies || []).map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('');

    return `
      <div class="timeline-item reveal">
        <p class="timeline-period">${escapeHtml(exp.period)}</p>
        <p class="timeline-role">${escapeHtml(exp.role)}</p>
        <p class="timeline-company">${escapeHtml(exp.company || exp.institution)}</p>
        <p class="timeline-desc">${escapeHtml(exp.description)}</p>
        ${techTags ? `<div class="timeline-tech">${techTags}</div>` : ''}
      </div>
    `;
  }).join('');
}

// ---------- Render: Evolution ----------
function renderEvolution() {
  const container = $('#evolution-grid');
  if (!container) return;

  container.innerHTML = portfolio.versions.map(v => {
    const statusClass = v.status === 'active' ? 'status-active' : '';
    const statusLabel = v.status === 'active' ? 'Current' : 'Planned';

    return `
      <div class="evolution-card ${statusClass} reveal" aria-label="${escapeHtml(v.name)}">
        <span class="version-badge">
          <span aria-hidden="true">${v.status === 'active' ? '●' : '○'}</span>
          ${escapeHtml(statusLabel)}
        </span>
        <h3>${escapeHtml(v.name)}</h3>
        <p class="version-period">${escapeHtml(v.period)}</p>
        <p class="version-tech">${escapeHtml(v.technology)}</p>
        <p class="version-desc">${escapeHtml(v.description)}</p>
      </div>
    `;
  }).join('');
}

// ---------- Render: Contact ----------
function renderContact() {
  const container = $('#contact-links');
  if (!container) return;

  const links = [];

  if (portfolio.contact.email) {
    links.push(`<a href="mailto:${escapeHtml(portfolio.contact.email)}" class="contact-link">✉ Email</a>`);
  }
  if (portfolio.contact.linkedin) {
    links.push(`<a href="${escapeHtml(portfolio.contact.linkedin)}" target="_blank" rel="noopener noreferrer" class="contact-link">LinkedIn</a>`);
  }
  if (portfolio.contact.github) {
    links.push(`<a href="${escapeHtml(portfolio.contact.github)}" target="_blank" rel="noopener noreferrer" class="contact-link">GitHub</a>`);
  }
  if (portfolio.contact.website) {
    links.push(`<a href="${escapeHtml(portfolio.contact.website)}" target="_blank" rel="noopener noreferrer" class="contact-link">Website</a>`);
  }

  container.innerHTML = links.length > 0
    ? links.join('')
    : '<p class="contact-note">Contact links will be added when publicly available.</p>';
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
  const header = $('.site-header');

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
    rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'))}px 0px -40% 0px`
  });

  sections.forEach(section => observer.observe(section));
}

// ---------- Mobile Menu ----------
function initMobileMenu() {
  const toggle = $('#menu-toggle');
  const nav = $('#main-nav');
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
    if (!nav.contains(e.target) && navList.classList.contains('open')) {
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
  icon.textContent = theme === 'dark' ? '☀' : '☾';
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

// ---------- Init ----------
function init() {
  renderEducation();
  renderPublications();
  renderSkills();
  renderTimeline();
  renderEvolution();
  renderContact();

  initScrollReveal();
  initActiveNav();
  initMobileMenu();
  initThemeToggle();
  initSmoothScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
