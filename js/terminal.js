// Terminal de la page d'accueil : animation « apt install », carte de visite, commandes.
(() => {
  'use strict';

  const data = JSON.parse(document.getElementById('site-data').textContent);
  const P = data.profile;
  const out = document.getElementById('out');
  const screen = document.getElementById('screen');
  const form = document.getElementById('prompt');
  const input = document.getElementById('cmd');
  const skipBtn = document.getElementById('skip');
  const PS1 = 'visiteur@portfolio:~$';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let skipping = reduceMotion;
  let booting = true;
  const pending = new Set();

  const sleep = (ms) => new Promise((resolve) => {
    if (skipping) return resolve();
    const entry = { resolve };
    entry.timer = setTimeout(() => { pending.delete(entry); resolve(); }, ms);
    pending.add(entry);
  });
  const skip = () => {
    skipping = true;
    pending.forEach((e) => { clearTimeout(e.timer); e.resolve(); });
    pending.clear();
  };

  /* ---------- Aides DOM (jamais d'innerHTML : pas d'injection possible) ---------- */
  const el = (tag, props = {}, ...kids) => {
    const n = document.createElement(tag);
    Object.entries(props).forEach(([k, v]) => {
      if (k === 'class') n.className = v;
      else if (k === 'text') n.textContent = v;
      else n.setAttribute(k, v);
    });
    kids.flat().forEach((k) => n.append(k));
    return n;
  };
  const link = (href, text, external = false) =>
    el('a', external ? { href, text, target: '_blank', rel: 'noopener' } : { href, text });
  const scrollDown = () => { screen.scrollTop = screen.scrollHeight; };
  const line = (content = '', cls = '') => {
    const d = el('div', { class: `line ${cls}`.trim() });
    d.append(content);
    out.appendChild(d);
    scrollDown();
    return d;
  };
  const gap = () => out.appendChild(el('div', { class: 'gap' }));
  const kv = (rows) => {
    const g = el('div', { class: 'kv' });
    rows.forEach(([k, v]) => g.append(el('span', { text: k }), el('span', {}, v)));
    out.appendChild(g);
    scrollDown();
  };
  const echo = (raw) => {
    out.appendChild(el('div', { class: 'line' }, el('span', { class: 'ps1', text: PS1 }), el('span', { class: 'cmd', text: raw })));
    scrollDown();
  };

  async function typeCommand(text, speed = 32) {
    const cmd = el('span', { class: 'cmd' });
    const caret = el('span', { class: 'caret' });
    out.appendChild(el('div', { class: 'line' }, el('span', { class: 'ps1', text: PS1 }), cmd, caret));
    for (const ch of text) {
      cmd.textContent += ch;
      scrollDown();
      await sleep(speed + Math.random() * 28);
    }
    caret.remove();
  }

  const showCard = () => {
    out.appendChild(document.getElementById('card-tpl').content.cloneNode(true));
    scrollDown();
  };

  /* ---------- Animation de démarrage ---------- */
  async function boot() {
    await sleep(350);
    await typeCommand('sudo apt install portfolio-hassimiou');
    await sleep(350);
    const steps = [
      ['[sudo] mot de passe pour visiteur : ********', 'dim'],
      ['Lecture des listes de paquets... Fait', ''],
      ["Construction de l'arbre des dépendances... Fait", ''],
      ['Les NOUVEAUX paquets suivants seront installés :', ''],
      ['  portfolio-hassimiou', 'ok'],
      ['0 mis à jour, 1 nouvellement installés, 0 à enlever et 0 non mis à jour.', ''],
      ['Réception de 1 : hassimiou07.github.io/Portfolio-Hassimiou stable/main portfolio-hassimiou 2026.1 [42,0 ko]', 'dim'],
    ];
    for (const [text, cls] of steps) {
      line(text, cls);
      await sleep(210);
    }
    const bar = line('', 'dim');
    for (let i = 0; i <= 20; i += 1) {
      bar.textContent = `Dépaquetage de portfolio-hassimiou [${'#'.repeat(i)}${'.'.repeat(20 - i)}] ${i * 5}%`;
      scrollDown();
      await sleep(42);
    }
    line('Paramétrage de portfolio-hassimiou (2026.1) ...', '');
    await sleep(320);
    line('✔ Installation terminée.', 'ok');
    gap();
    await sleep(380);
    await typeCommand('portfolio --carte');
    await sleep(300);
    showCard();
    await sleep(500);
    line('Tapez help pour lister les commandes, ou utilisez le menu en haut.', 'dim');
    gap();
  }

  /* ---------- Commandes ---------- */
  const PAGES = {
    about: 'About.html', skills: 'Projects.html', competences: 'Projects.html', projects: 'Projects.html',
    projets: 'Projects.html', pentest: 'Pentest.html', contact: 'Contact.html', cv: 'CV.html', accueil: 'index.html',
  };
  const history = [];
  let histIndex = 0;

  const commands = {
    help() {
      kv([
        ['about', 'qui je suis'],
        ['skills', 'mes technologies'],
        ['projects', 'mes compétences et mes projets'],
        ['pentest', 'ma section pentest éthique'],
        ['contact', 'me joindre'],
        ['cv', 'télécharger mon CV (PDF)'],
        ['open <page>', 'ouvrir une page : about, skills, projects, pentest, contact, cv'],
        ['ls', 'lister les sections'],
        ['neofetch', 'réafficher la carte de visite'],
        ['clear', "effacer l'écran"],
      ]);
    },
    about() {
      P.bio.forEach((t) => { line(t); gap(); });
      kv([
        ['Recherche', P.searching],
        ['Disponible', P.availability],
        ['Lieu', P.location],
      ]);
      gap();
      line(link('About.html', 'Voir la page À propos'));
    },
    skills() {
      data.skillGroups.forEach((g) => kv([[g.title, g.items.join(', ')]]));
      gap();
      line(link('Projects.html', 'Voir les compétences du BUT et leurs projets'));
    },
    projects() {
      const list = el('div', { class: 'plist' });
      data.projects.forEach((p) => {
        const label = `${p.title} : ${p.subtitle}`;
        list.append(el('div', {}, p.page ? link(p.page, label) : el('span', { text: label }), el('span', { class: 'dim', text: p.page ? '' : ` (${p.kind.toLowerCase()})` })));
      });
      out.appendChild(list);
      gap();
      line(link('Projects.html', 'Voir les compétences et tous les projets'));
    },
    pentest() {
      line("Objectif : devenir pentester éthique. Labs en environnement isolé et autorisé.");
      gap();
      const list = el('div', { class: 'plist' });
      data.projects.filter((p) => p.page.startsWith('Pentest/')).forEach((p) => list.append(el('div', {}, link(p.page, `${p.title} : ${p.subtitle}`))));
      list.append(el('div', {}, link('Pentest/methodologie.html', 'Méthodologie')), el('div', {}, link('Pentest/outils.html', 'Outils')));
      out.appendChild(list);
      gap();
      line(link('Pentest.html', 'Ouvrir la section Pentest'));
    },
    contact() {
      kv([
        ['E-mail', link(`mailto:${P.email}`, P.email)],
        ['Téléphone', link(`tel:${P.phoneHref}`, P.phone)],
        ['GitHub', link(P.github, 'github.com/hassimiou07', true)],
        ['LinkedIn', link(P.linkedin, 'Hassimiou Barry', true)],
      ]);
    },
    cv() {
      line(`Téléchargement de ${P.cv} ...`, 'ok');
      const a = el('a', { href: P.cv, download: '' });
      document.body.appendChild(a);
      a.click();
      a.remove();
      line(link('CV.html', 'Ou consulter la version web du CV'));
    },
    ls() {
      const list = el('div', { class: 'plist' });
      [['about', 'About.html'], ['projects', 'Projects.html'], ['pentest', 'Pentest.html'], ['contact', 'Contact.html']].forEach(([n, h]) => list.append(el('div', {}, link(h, `${n}/`))));
      list.append(el('div', {}, link(P.cv, 'cv.pdf')));
      out.appendChild(list);
    },
    neofetch() { showCard(); },
    whoami() { line('visiteur', 'ok'); line('Bienvenue sur mon portfolio.', 'dim'); },
    date() { line(new Date().toLocaleString('fr-FR')); },
    history() { history.forEach((h, i) => line(`${String(i + 1).padStart(3)}  ${h}`, 'dim')); },
    clear() { out.textContent = ''; },
    exit() { line("Impossible de quitter ce terminal : utilisez le menu en haut pour naviguer.", 'warn'); },
    sudo() {
      line("visiteur n'est pas dans le fichier sudoers. Cet incident sera signalé.", 'err');
      line('(Rassurez-vous : tout est public ici.)', 'dim');
    },
    echo(args) { line(args.join(' ')); },
    open(args) { navigate('open', args[0]); },
    cd(args) { navigate('cd', args[0]); },
  };

  function navigate(cmd, target) {
    const name = (target || '').replace(/\/$/, '').toLowerCase();
    if (!name) { line(`Usage : ${cmd} <page>  (about, skills, projects, pentest, contact, cv)`, 'warn'); return; }
    if (PAGES[name]) {
      line(`Ouverture de ${PAGES[name]} ...`, 'ok');
      window.location.href = PAGES[name];
    } else {
      line(`bash: ${cmd}: ${target} : aucun fichier ou dossier de ce type`, 'err');
    }
  }

  function run(raw) {
    const text = raw.trim();
    echo(raw);
    if (!text) return;
    history.push(text);
    histIndex = history.length;
    const [name, ...args] = text.split(/\s+/);
    const key = name.toLowerCase();
    const aliases = { projets: 'projects', competences: 'skills', aide: 'help', '?': 'help', contacts: 'contact' };
    const fn = commands[aliases[key] || key];
    if (fn && Object.prototype.hasOwnProperty.call(commands, aliases[key] || key)) fn(args);
    else line(`bash: ${name} : commande introuvable. Tapez help.`, 'err');
    scrollDown();
  }

  /* ---------- Interactions ---------- */
  const bootDone = boot().then(() => {
    booting = false;
    out.setAttribute('aria-busy', 'false');
    skipBtn.hidden = true;
    form.hidden = false;
    if (window.matchMedia('(pointer: fine)').matches) input.focus({ preventScroll: true });
    scrollDown();
  });

  skipBtn.addEventListener('click', skip);
  document.addEventListener('keydown', (e) => {
    if (booting && !e.metaKey && !e.ctrlKey && !e.altKey && e.key.length <= 12) skip();
  });
  screen.addEventListener('click', () => {
    if (booting) { skip(); return; }
    if (!window.getSelection().toString()) input.focus({ preventScroll: true });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    input.value = '';
    run(value);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (histIndex > 0) { histIndex -= 1; input.value = history[histIndex]; }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIndex < history.length - 1) { histIndex += 1; input.value = history[histIndex]; } else { histIndex = history.length; input.value = ''; }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const [first, second] = input.value.split(/\s+/);
      if (second === undefined) {
        const m = Object.keys(commands).filter((c) => c.startsWith(first.toLowerCase()));
        if (m.length === 1) input.value = `${m[0]} `;
      } else if (['open', 'cd'].includes(first)) {
        const m = Object.keys(PAGES).filter((c) => c.startsWith(second.toLowerCase()));
        if (m.length === 1) input.value = `${first} ${m[0]}`;
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      commands.clear();
    }
  });
})();
