// Comportements communs : menu mobile, filtre des projets, formulaire de contact.
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

    const apply = (filter) => {
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
      if (count) count.textContent = `${shown} projet${shown > 1 ? 's' : ''}`;
    };

    buttons.forEach((b) => b.addEventListener('click', () => {
      apply(b.dataset.filter);
      history.replaceState(null, '', b.dataset.filter === 'all' ? location.pathname : `#${b.dataset.filter}`);
    }));

    const initial = location.hash.slice(1);
    apply(buttons.some((b) => b.dataset.filter === initial) ? initial : 'all');
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
