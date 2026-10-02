// Comportements communs : menu mobile, filtre compétences/projets, formulaire de contact.
(() => {
  'use strict';

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    const setOpen = (open) => {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    };
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  const grid = document.getElementById('project-grid');
  if (grid) {
    const buttons = Array.from(document.querySelectorAll('[data-filter]'));
    const cards = Array.from(grid.querySelectorAll('.card'));
    const count = document.getElementById('filter-count');
    const anchor = document.getElementById('projets');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const labels = {};
    buttons.forEach((b) => { labels[b.dataset.filter] = b.dataset.label || b.textContent.trim(); });
    let current = 'all';

    const apply = (filter) => {
      current = filter;
      let shown = 0;
      cards.forEach((card) => {
        const match = filter === 'all' || (card.dataset.comp || '').split(' ').includes(filter);
        card.hidden = !match;
        if (match) shown += 1;
      });
      buttons.forEach((b) => {
        const active = b.dataset.filter === filter;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      grid.querySelectorAll('.proj-group').forEach((g) => { g.hidden = !g.querySelector('.card:not([hidden])'); });
      const noun = `${shown} projet${shown > 1 ? 's' : ''}`;
      if (count) count.textContent = filter === 'all' ? noun : `${labels[filter]} : ${noun}`;
    };

    buttons.forEach((b) => b.addEventListener('click', () => {
      const wanted = b.dataset.filter;
      const next = wanted === current && wanted !== 'all' ? 'all' : wanted;
      apply(next);
      history.replaceState(null, '', next === 'all' ? location.pathname : `#${next}`);
      if (b.classList.contains('card--filter') && next !== 'all' && anchor) {
        anchor.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      }
    }));

    const initial = location.hash.slice(1);
    apply(buttons.some((b) => b.dataset.filter === initial) ? initial : 'all');
    if (initial && initial !== 'projets' && current !== 'all' && anchor) {
      window.addEventListener('load', () => anchor.scrollIntoView({ behavior: 'auto', block: 'start' }));
    }
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const body = `${d.get('message')}\n\n--\n${d.get('name')}`;
      location.href = `mailto:${form.dataset.to}?subject=${encodeURIComponent(d.get('subject'))}&body=${encodeURIComponent(body)}`;
    });
  }
})();
