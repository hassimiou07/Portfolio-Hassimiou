// Génère toutes les pages HTML du portfolio à partir de data/site.js.
// Usage : node tools/build.js
const fs = require('fs');
const path = require('path');
const D = require('../data/site.js');

const ROOT = path.join(__dirname, '..');
const P = D.profile;

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fa = (c) => (/fa-(brands|solid|regular)/.test(c) ? c : `fa-solid ${c}`);
const depthRoot = (rel) => '../'.repeat(rel.split('/').length - 1);

function write(rel, html) {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

const compById = Object.fromEntries(D.competences.map((c) => [c.id, c]));
const projById = Object.fromEntries(D.projects.map((p) => [p.id, p]));
const ordered = D.groups.flatMap((g) => D.projects.filter((p) => p.group === g.id));
if (ordered.length !== D.projects.length) throw new Error('Chaque projet doit avoir un `group` valide.');

/* ---------- Gabarit commun ---------- */

function socialLinks(root) {
  return `<ul class="social">
        <li><a href="${P.github}" aria-label="GitHub" title="GitHub"><i class="fa-brands fa-github"></i></a></li>
        <li><a href="${P.linkedin}" aria-label="LinkedIn" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a></li>
        <li><a href="mailto:${P.email}" aria-label="E-mail" title="E-mail"><i class="fa-solid fa-envelope"></i></a></li>
        <li><a href="tel:${P.phoneHref}" aria-label="Téléphone" title="Téléphone"><i class="fa-solid fa-phone"></i></a></li>
      </ul>`;
}

function layout({ rel, title, description, active = '', body, bodyClass = '', scripts = [] }) {
  const root = depthRoot(rel);
  const fullTitle = rel === 'index.html' ? `${P.name} · Portfolio` : `${title} · ${P.name}`;
  const url = P.siteUrl + (rel === 'index.html' ? '' : rel);
  const navLinks = D.nav
    .map((n) => `<a class="nav__link${n.id === active ? ' is-active' : ''}" href="${root}${n.href}"${n.id === active ? ' aria-current="page"' : ''}>${esc(n.label)}</a>`)
    .join('\n        ');
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(fullTitle)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="theme-color" content="#070b10">
  <link rel="canonical" href="${url}">
  <link rel="icon" href="${root}Img/favicon.svg" type="image/svg+xml">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(fullTitle)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${P.siteUrl}${P.photo}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <script>try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
  <link rel="stylesheet" href="${root}Css/style.css">
  <link rel="stylesheet" href="${root}Css/themes.css">
</head>
<body class="${bodyClass}">
  <a class="skip" href="#main">Aller au contenu</a>
  <header class="topbar">
    <div class="topbar__inner">
      <a class="brand" href="${root}index.html" aria-label="Accueil">
        <span class="brand__ps">$</span><span class="brand__user">hassimiou</span><span class="brand__at">@</span><span class="brand__host">portfolio</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Ouvrir le menu"><i class="fa-solid fa-bars"></i></button>
      <nav class="nav" id="site-nav" aria-label="Navigation principale">
        ${navLinks}
        <a class="btn btn--sm" href="${root}${P.cv}" download><i class="fa-solid fa-download" aria-hidden="true"></i> CV</a>
      </nav>
    </div>
  </header>
  <main id="main">
${body}
  </main>
${bodyClass.includes('home') ? '' : `  <footer class="footer">
    <div class="container footer__inner">
      <p>© 2026 ${esc(P.name)} · ${esc(P.location)}</p>
      ${socialLinks(root)}
    </div>
  </footer>`}
  <script src="${root}js/site.js" defer></script>
${scripts.map((s) => `  <script src="${root}${s}" defer></script>`).join('\n')}
</body>
</html>
`;
}

/* ---------- Briques ---------- */

function crumbs(root, trail) {
  const items = trail
    .map(([label, href], i) => (href ? `<a href="${root}${href}">${esc(label)}</a>` : `<span aria-current="page">${esc(label)}</span>`))
    .join('<span class="crumbs__sep" aria-hidden="true">/</span>');
  return `<nav class="crumbs container" aria-label="Fil d'Ariane">${items}</nav>`;
}

function pageHead({ prompt, title, lead }) {
  return `<section class="page-head container">
      <p class="prompt"><span class="prompt__ps">$</span> ${esc(prompt)}</p>
      <h1>${esc(title)}</h1>
      ${lead ? `<p class="lead">${esc(lead)}</p>` : ''}
    </section>`;
}

function tags(list) {
  return `<ul class="tags">${list.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`;
}

function media(p, root) {
  return p.logo
    ? `<img class="card__logo" src="${root}${p.logo}" alt="" loading="lazy">`
    : `<i class="${fa(p.icon)}" aria-hidden="true"></i>`;
}

function projectCard(p, root) {
  const comp = [...p.competences, ...(p.tags || [])].join(' ');
  const kind = [p.kind, p.period].filter(Boolean).join(' · ');
  const live = /en cours/i.test(p.kind) ? ' is-live' : '';
  const inner = `<div class="card__media">${media(p, root)}</div>
      <div class="card__body">
        <p class="card__kind${live}">${esc(kind)}</p>
        <h3 class="card__title">${esc(p.title)}</h3>
        <p class="card__sub">${esc(p.subtitle)}</p>
        <p class="card__text">${esc(p.summary)}</p>
        ${tags(p.stack.slice(0, 4))}
        <p class="card__comps"><i class="fa-solid fa-bullseye" aria-hidden="true"></i> ${p.competences.map((id) => esc(compById[id].title)).join(' · ')}</p>
      </div>`;
  return p.page
    ? `<a class="card" data-comp="${comp}" href="${root}${p.page}">${inner}<span class="card__more">Voir le projet <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span></a>`
    : `<article class="card card--static" data-comp="${comp}">${inner}</article>`;
}

function renderSection(s, root) {
  const h = `<h2>${esc(s.title)}</h2>`;
  if (s.type === 'cards') {
    return `<section class="block">${h}<div class="grid grid--2">${s.items
      .map((i) => `<div class="tile"><i class="${fa(i.icon)}" aria-hidden="true"></i><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></div>`)
      .join('')}</div></section>`;
  }
  if (s.type === 'list') {
    return `<section class="block">${h}<ul class="checks">${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></section>`;
  }
  if (s.type === 'steps') {
    return `<section class="block">${h}<ol class="steps">${s.items
      .map(
        (i, n) => `<li class="step">
          <span class="step__n" aria-hidden="true">${n + 1}</span>
          <div class="step__body">
            <h3>${esc(i.title)}</h3>
            <p>${esc(i.text)}</p>
            ${i.img ? `<a class="shot" href="${root}${i.img}" target="_blank" rel="noopener" title="Ouvrir l'image en grand"><img src="${root}${i.img}" alt="${esc(i.alt || '')}" loading="lazy"></a>` : ''}
          </div>
        </li>`
      )
      .join('')}</ol></section>`;
  }
  if (s.type === 'table') {
    return `<section class="block">${h}<div class="table-wrap"><table class="table"><thead><tr>${s.head
      .map((c) => `<th scope="col">${esc(c)}</th>`)
      .join('')}</tr></thead><tbody>${s.rows
      .map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('')}</tr>`)
      .join('')}</tbody></table></div></section>`;
  }
  return '';
}

/* ---------- Pages de projets ---------- */

function detailPage(p) {
  const root = depthRoot(p.page);
  const isLab = (p.tags || []).includes('pentest');
  const trail = isLab ? [['Pentest', 'Pentest.html'], [p.title]] : [['Projets', 'Projects.html'], [p.title]];
  const links = (p.links || [])
    .map((l) => `<a class="btn btn--ghost btn--sm" href="${l.href}" target="_blank" rel="noopener"><i class="${l.icon}" aria-hidden="true"></i> ${esc(l.label)}</a>`)
    .join('');
  const compChips = p.competences
    .map((id) => `<a class="chip" href="${root}Projects.html#${id}"><i class="${fa(compById[id].icon)}" aria-hidden="true"></i> ${esc(compById[id].title)}</a>`)
    .join('');
  const body = `${crumbs(root, trail)}
    <article class="container detail">
      <header class="detail__head">
        <div class="detail__media">${media(p, root)}</div>
        <div>
          <p class="card__kind${/en cours/i.test(p.kind) ? ' is-live' : ''}">${esc([p.kind, p.period].filter(Boolean).join(' · '))}</p>
          <h1>${esc(p.title)}</h1>
          <p class="lead">${esc(p.subtitle)}</p>
          ${links ? `<div class="btn-row">${links}</div>` : ''}
        </div>
      </header>
      <dl class="facts">
        <div><dt>Technologies</dt><dd>${tags(p.stack)}</dd></div>
        <div><dt>Compétences</dt><dd><div class="chips">${compChips}</div></dd></div>
      </dl>
      <section class="block">
        <h2>Vue d'ensemble</h2>
        ${p.overview.map((t) => `<p>${esc(t)}</p>`).join('')}
      </section>
      ${(p.sections || []).map((s) => renderSection(s, root)).join('\n      ')}
      <p class="back"><a href="${root}${isLab ? 'Pentest.html' : 'Projects.html'}"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i> ${isLab ? 'Retour au pentest' : 'Tous les projets'}</a></p>
    </article>`;
  write(p.page, layout({
    rel: p.page,
    title: p.title,
    description: p.summary,
    active: isLab ? 'pentest' : 'projects',
    body,
  }));
}

function projectsPage() {
  const compCards = D.competences
    .map((c) => {
      const n = D.projects.filter((p) => p.competences.includes(c.id)).length;
      return `<button type="button" class="card card--skill card--filter" data-filter="${c.id}" data-label="${esc(c.title)}" aria-pressed="false">
        <span class="card__media"><i class="${fa(c.icon)}" aria-hidden="true"></i></span>
        <span class="card__body">
          <span class="card__title">${esc(c.title)}</span>
          <span class="card__text">${esc(c.summary)}</span>
          <span class="card__count">${n} projet${n > 1 ? 's' : ''}</span>
        </span>
      </button>`;
    })
    .join('\n        ');
  const body = `${pageHead({
    prompt: 'ls ./competences ./projets',
    title: 'Compétences et projets',
    lead: 'Les six compétences du BUT Informatique, chacune démontrée par des projets. Choisissez une compétence pour filtrer les projets, ou ouvrez un projet pour le détail.',
  })}
    <section class="container block">
      <h2 id="competences-title">Les six compétences du BUT</h2>
      <div class="grid grid--3" role="group" aria-labelledby="competences-title">
        ${compCards}
      </div>
    </section>
    <section class="container block" id="projets">
      <h2>Projets</h2>
      <div class="filters" role="group" aria-label="Autres filtres">
        <button type="button" class="chip chip--btn is-active" data-filter="all" data-label="Tous les projets" aria-pressed="true">Tous les projets</button>
        <button type="button" class="chip chip--btn" data-filter="pentest" data-label="Pentest" aria-pressed="false">Pentest</button>
      </div>
      <p class="muted filters__count" id="filter-count" aria-live="polite"></p>
      <div id="project-grid">
        ${D.groups.map((g) => `<section class="proj-group" aria-labelledby="g-${g.id}">
          <div class="group__head"><h3 class="group__title" id="g-${g.id}">${esc(g.title)}</h3><span class="group__note">${esc(g.note)}</span></div>
          <div class="grid grid--3">
            ${ordered.filter((p) => p.group === g.id).map((p) => projectCard(p, '')).join('\n            ')}
          </div>
        </section>`).join('\n        ')}
      </div>
    </section>`;
  write('Projects.html', layout({
    rel: 'Projects.html', title: 'Compétences et projets', active: 'projects', body,
    description: 'Les six compétences du BUT Informatique de Hassimiou BARRY et les projets qui les démontrent : BlaiseConnect, GenEvent, projets universitaires et labs de pentest.',
  }));
}

/* ---------- Anciennes adresses (compétences) : redirections vers Projects.html ---------- */

function redirectPage(rel, target) {
  const url = `${depthRoot(rel)}${target}`;
  const body = `    <section class="container page-head">
      <p class="prompt"><span class="prompt__ps">$</span> cd ${esc(rel.replace(/\.html$/, ''))}</p>
      <h1>Page déplacée</h1>
      <p class="lead">Les compétences et les projets sont maintenant réunis sur une seule page.</p>
      <p><a class="btn" href="${url}">Voir compétences et projets</a></p>
    </section>`;
  const html = layout({ rel, title: 'Page déplacée', body, description: 'Cette page a été déplacée vers Compétences et projets.' });
  write(rel, html.replace('</title>', `</title>\n  <meta http-equiv="refresh" content="0; url=${url}">\n  <meta name="robots" content="noindex">`));
}

function redirects() {
  redirectPage('Skills.html', 'Projects.html');
  D.competences.forEach((c) => redirectPage(c.file, `Projects.html#${c.id}`));
}

/* ---------- Pentest ---------- */

function pentestPages() {
  const labs = D.projects.filter((p) => (p.tags || []).includes('pentest'));
  const hubBody = `${pageHead({ prompt: 'cd ./pentest', title: 'Pentest éthique', lead: D.pentest.intro })}
    <section class="container block">
      <div class="grid grid--4">
        ${D.pentest.principles.map((i) => `<div class="tile"><i class="${fa(i.icon)}" aria-hidden="true"></i><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></div>`).join('\n        ')}
      </div>
    </section>
    <section class="container block">
      <h2>Mes labs</h2>
      <p class="callout"><i class="fa-solid fa-user-secret" aria-hidden="true"></i> Ces labs démontrent la compétence « Tester » du BUT. <a href="Projects.html#tester">Voir cette compétence avec tous ses projets</a>.</p>
      <div class="grid grid--3">
        ${labs.map((p) => projectCard(p, '')).join('\n        ')}
      </div>
    </section>
    <section class="container block">
      <h2>Comprendre la démarche</h2>
      <div class="grid grid--2">
        <a class="card card--link" href="Pentest/methodologie.html">
          <div class="card__media"><i class="fa-solid fa-route" aria-hidden="true"></i></div>
          <div class="card__body"><h3 class="card__title">Méthodologie</h3><p class="card__text">Le cadre d'un test d'intrusion, ses six phases, et où elles apparaissent dans mes labs.</p></div>
          <span class="card__more">Lire <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
        </a>
        <a class="card card--link" href="Pentest/outils.html">
          <div class="card__media"><i class="fa-solid fa-toolbox" aria-hidden="true"></i></div>
          <div class="card__body"><h3 class="card__title">Outils</h3><p class="card__text">Metasploit, Ghidra, Burp Suite, Root-Me : à quoi ils servent et où je les utilise.</p></div>
          <span class="card__more">Découvrir <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
        </a>
      </div>
    </section>`;
  write('Pentest.html', layout({
    rel: 'Pentest.html', title: 'Pentest', active: 'pentest', body: hubBody,
    description: 'Pentest éthique : méthodologie, outils et labs de Hassimiou BARRY (Metasploit, Ghidra, Root-Me).',
  }));

  const mroot = '../';
  const methBody = `${crumbs(mroot, [['Pentest', 'Pentest.html'], ['Méthodologie']])}
    ${pageHead({ prompt: 'cat pentest/methodologie.md', title: 'Méthodologie', lead: 'Un test d\'intrusion suit une démarche structurée. Voici le cadre, les phases, et les endroits où elles apparaissent dans mes labs.' })}
    <section class="container block">
      <h2>Le cadre</h2>
      <ul class="checks">${D.pentest.rules.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
    </section>
    <section class="container block">
      <h2>Les six phases</h2>
      <ol class="steps">
        ${D.pentest.phases.map((s, i) => `<li class="step"><span class="step__n" aria-hidden="true">${i + 1}</span><div class="step__body"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div></li>`).join('\n        ')}
      </ol>
    </section>
    <section class="container block">
      <h2>Dans mes labs</h2>
      <div class="table-wrap"><table class="table">
        <thead><tr><th scope="col">Lab</th><th scope="col">Phases concernées</th></tr></thead>
        <tbody>
          ${D.pentest.coverage.map((c) => `<tr><th scope="row"><a href="../${projById[c.lab].page}">${esc(projById[c.lab].title)}</a></th><td>${esc(c.phases)}</td></tr>`).join('\n          ')}
        </tbody>
      </table></div>
    </section>`;
  write('Pentest/methodologie.html', layout({
    rel: 'Pentest/methodologie.html', title: 'Méthodologie du pentest', active: 'pentest', body: methBody,
    description: 'Le cadre et les phases d\'un test d\'intrusion, et leur place dans les labs de Hassimiou BARRY.',
  }));

  const toolsBody = `${crumbs(mroot, [['Pentest', 'Pentest.html'], ['Outils']])}
    ${pageHead({ prompt: 'ls pentest/outils', title: 'Outils', lead: 'Les outils de ma boîte à outils de sécurité, à quoi ils servent, et où je les utilise.' })}
    <section class="container">
      <div class="grid grid--2">
        ${D.pentest.tools.map((t) => `<div class="tile tile--tool">
          <div class="tile__logo${t.logo ? ' tile__logo--img' : ''}">${t.logo ? `<img src="../${t.logo}" alt="" loading="lazy">` : `<i class="${fa(t.icon)}" aria-hidden="true"></i>`}</div>
          <div>
            <h3>${esc(t.name)}</h3>
            <p>${esc(t.text)}</p>
            <p class="muted">${esc(t.use)}${t.lab ? ` <a href="../${projById[t.lab].page}">Voir le lab</a>` : ''}</p>
          </div>
        </div>`).join('\n        ')}
      </div>
    </section>`;
  write('Pentest/outils.html', layout({
    rel: 'Pentest/outils.html', title: 'Outils de pentest', active: 'pentest', body: toolsBody,
    description: 'Metasploit, Ghidra, Burp Suite et Root-Me : les outils de sécurité de Hassimiou BARRY.',
  }));
}

/* ---------- À propos ---------- */

function aboutPage() {
  const body = `${pageHead({ prompt: 'cat about.md', title: 'À propos', lead: P.tagline })}
    <section class="container block about">
      <div class="about__photo"><img src="${P.photo}" alt="Portrait de ${esc(P.name)}" width="220" height="220"></div>
      <div>
        ${P.bio.map((t) => `<p>${esc(t)}</p>`).join('\n        ')}
        <p class="callout"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i> <strong>Je cherche :</strong> ${esc(P.searching)}. ${esc(P.availability)}.</p>
        <div class="btn-row">
          <a class="btn" href="${P.cv}" download><i class="fa-solid fa-download" aria-hidden="true"></i> Télécharger mon CV</a>
          <a class="btn btn--ghost" href="Contact.html">Me contacter</a>
        </div>
      </div>
    </section>
    <section class="container block">
      <h2>Compétences et technologies</h2>
      <div class="grid grid--3">
        ${D.skillGroups.map((g) => `<div class="tile"><i class="${fa(g.icon)}" aria-hidden="true"></i><h3>${esc(g.title)}</h3>${tags(g.items)}</div>`).join('\n        ')}
      </div>
    </section>
    <section class="container block">
      <h2>Expériences professionnelles</h2>
      <div class="grid grid--2">
        ${D.experiences.map((e) => `<div class="tile"><h3>${esc(e.title)}</h3><p class="muted">${esc(e.org)} · ${esc(e.when)}</p><ul class="checks">${e.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('\n        ')}
      </div>
    </section>
    <section class="container block">
      <h2>Parcours</h2>
      <ol class="timeline">
        ${D.timeline.map((t) => `<li class="timeline__item${t.current ? ' is-current' : ''}">
          <p class="timeline__when">${esc(t.when)}</p>
          <h3>${esc(t.title)}</h3>
          <p class="muted">${esc(t.org)}</p>
          <p>${esc(t.text)}</p>
          ${t.tags ? tags(t.tags) : ''}
          ${t.link ? `<p><a class="btn btn--ghost btn--sm" href="${t.link.href}" target="_blank" rel="noopener">${esc(t.link.label)}</a></p>` : ''}
        </li>`).join('\n        ')}
      </ol>
    </section>
    <section class="container block">
      <h2>Langues et qualités</h2>
      <div class="grid grid--2">
        <div class="tile"><h3>Langues</h3><ul class="plain">${P.languages.map(([l, n]) => `<li><strong>${esc(l)}</strong> · ${esc(n)}</li>`).join('')}</ul></div>
        <div class="tile"><h3>Qualités</h3>${tags(P.qualities)}</div>
      </div>
    </section>
    <section class="container block">
      <h2>Centres d'intérêt</h2>
      <div class="grid grid--4">
        ${P.interests.map(([t, icon, text]) => `<div class="tile"><i class="${fa(icon)}" aria-hidden="true"></i><h3>${esc(t)}</h3><p>${esc(text)}</p></div>`).join('\n        ')}
      </div>
    </section>`;
  write('About.html', layout({
    rel: 'About.html', title: 'À propos', active: 'about', body,
    description: 'Hassimiou BARRY, étudiant en BUT2 Informatique à Grenoble, passionné de cybersécurité et futur pentester éthique.',
  }));
}

/* ---------- Contact ---------- */

function contactPage() {
  const rows = [
    ['fa-solid fa-envelope', 'E-mail', P.email, `mailto:${P.email}`],
    ['fa-solid fa-phone', 'Téléphone', P.phone, `tel:${P.phoneHref}`],
    ['fa-brands fa-github', 'GitHub', '@hassimiou07', P.github],
    ['fa-brands fa-linkedin', 'LinkedIn', 'Hassimiou Barry', P.linkedin],
    ['fa-solid fa-location-dot', 'Localisation', P.location, ''],
  ];
  const body = `${pageHead({ prompt: 'mail -s "Bonjour"', title: 'Contact', lead: `${P.searching}. ${P.availability}.` })}
    <section class="container contact">
      <div class="grid grid--2">
        <div class="stack">
          ${rows.map(([icon, label, value, href]) => `<div class="tile tile--row"><i class="${icon}" aria-hidden="true"></i><div><h3>${esc(label)}</h3><p>${href ? `<a href="${href}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${esc(value)}</a>` : esc(value)}</p></div></div>`).join('\n          ')}
        </div>
        <form class="form" id="contact-form" data-to="${P.email}">
          <h2>Écrire un message</h2>
          <p class="muted">Le message s'ouvre dans votre application de messagerie, prêt à être envoyé.</p>
          <label for="f-name">Votre nom</label>
          <input id="f-name" name="name" type="text" autocomplete="name" required>
          <label for="f-subject">Sujet</label>
          <input id="f-subject" name="subject" type="text" required>
          <label for="f-message">Message</label>
          <textarea id="f-message" name="message" rows="6" required></textarea>
          <button class="btn" type="submit"><i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Ouvrir mon e-mail</button>
        </form>
      </div>
    </section>`;
  write('Contact.html', layout({
    rel: 'Contact.html', title: 'Contact', active: 'contact', body,
    description: 'Contacter Hassimiou BARRY : e-mail, téléphone, GitHub et LinkedIn.',
  }));
}

/* ---------- CV web ---------- */

function cvPage() {
  const cvProjects = ['blaiseconnect', 'metasploit', 'genevent'].map((id) => projById[id]);
  const body = `<section class="container cv-wrap">
      <div class="cv-actions no-print">
        <a class="btn" href="${P.cv}" download><i class="fa-solid fa-download" aria-hidden="true"></i> Télécharger le PDF</a>
        <button class="btn btn--ghost" type="button" onclick="window.print()"><i class="fa-solid fa-print" aria-hidden="true"></i> Imprimer</button>
      </div>
      <article class="cv">
        <header class="cv__head">
          <h1>${esc(P.name)}</h1>
          <p class="cv__role">Stagiaire DevSecOps · ${esc(P.searching.replace('Stage DevSecOps / cybersécurité, ', 'stage '))}</p>
          <p class="cv__contact">${esc(P.email)} · ${esc(P.phone)} · ${esc(P.location)}<br>
            <a href="${P.github}">GitHub</a> · <a href="${P.linkedin}">LinkedIn</a> · <a href="${P.siteUrl}">Portfolio</a></p>
        </header>
        <section><h2>Profil</h2><p>Étudiant en 2ème année de BUT Informatique à l'IUT2 Grenoble, orienté DevSecOps et cybersécurité. Disponible : ${esc(P.availability.toLowerCase())}.</p></section>
        <section><h2>Expériences professionnelles</h2>
          ${D.experiences.map((e) => `<div class="cv__item"><div class="cv__row"><h3>${esc(e.title)}</h3><span>${esc(e.when)}</span></div><p class="muted">${esc(e.org)}</p><ul>${e.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}
        </section>
        <section><h2>Projets</h2>
          ${cvProjects.map((p) => `<div class="cv__item"><div class="cv__row"><h3>${esc(p.title)} · ${esc(p.subtitle)}</h3><span>${esc(p.period || p.kind)}</span></div><p>${esc(p.summary)}</p></div>`).join('')}
          <div class="cv__item"><div class="cv__row"><h3>Projets universitaires en cours</h3><span>2026 – 2027</span></div><ul><li>Application client-serveur sécurisée, avec base de données, en équipe</li><li>Déploiement et sécurisation de services dans un réseau</li></ul></div>
          <div class="cv__item"><div class="cv__row"><h3>Projets universitaires de BUT1</h3><span>2025 – 2026</span></div><p>Installation de Debian 13 en machine virtuelle, base de données de l'association maritime Le Tourmentin (PostgreSQL), chatbot de culture générale en Java, site web institutionnel en HTML/CSS.</p></div>
        </section>
        <section><h2>Compétences</h2>
          <ul class="cv__skills">${D.skillGroups.map((g) => `<li><strong>${esc(g.title)} :</strong> ${esc(g.items.join(', '))}</li>`).join('')}</ul>
        </section>
        <section><h2>Formation</h2>
          <div class="cv__item"><div class="cv__row"><h3>BUT Informatique, 2ème année · IUT2 / UGA Grenoble</h3><span>2026 – 2027</span></div></div>
          <div class="cv__item"><div class="cv__row"><h3>Baccalauréat général · Lycée Blaise Pascal, Guinée</h3><span>2024 – 2025</span></div></div>
        </section>
        <section class="cv__cols">
          <div><h2>Langues</h2><ul>${P.languages.map(([l, n]) => `<li>${esc(l)} · ${esc(n)}</li>`).join('')}</ul></div>
          <div><h2>Qualités</h2><ul>${P.qualities.map((q) => `<li>${esc(q)}</li>`).join('')}</ul></div>
          <div><h2>Centres d'intérêt</h2><ul>${P.interests.map(([t]) => `<li>${esc(t)}</li>`).join('')}</ul></div>
        </section>
      </article>
    </section>`;
  write('CV.html', layout({
    rel: 'CV.html', title: 'CV', active: '', body, bodyClass: 'cv-page',
    description: 'CV de Hassimiou BARRY, étudiant en BUT2 Informatique, en recherche de stage DevSecOps pour avril 2027.',
  }));
}

/* ---------- Accueil : terminal plein écran ---------- */

function homePage() {
  const data = {
    profile: {
      name: P.name, role: P.role, status: P.status, email: P.email, phone: P.phone, phoneHref: P.phoneHref,
      github: P.github, linkedin: P.linkedin, cv: P.cv, searching: P.searching, availability: P.availability,
      location: P.location, bio: P.bio,
    },
    competences: D.competences.map((c) => ({ title: c.title, summary: c.summary, file: c.file })),
    projects: ordered.map((p) => ({ title: p.title, subtitle: p.subtitle, kind: p.kind, period: p.period, page: p.page || '' })),
    skillGroups: D.skillGroups.map((g) => ({ title: g.title, items: g.items })),
    themes: D.themes.map((x) => ({ id: x.id, label: x.label, hex: x.hex, hex2: x.hex2, default: !!x.default })),
  };
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  const stack = ['Linux', 'Java', 'PHP', 'JavaScript', 'React', 'PostgreSQL', 'Docker', 'Metasploit', 'Burp Suite'];
  const body = `    <section class="terminal" aria-label="Terminal du portfolio">
      <div class="terminal__bar">
        <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="terminal__title">visiteur@portfolio: ~</span>
        <button class="terminal__skip" id="skip" type="button">Passer l'animation</button>
      </div>
      <div class="terminal__screen" id="screen">
        <div id="out" role="log" aria-live="polite" aria-busy="true"></div>
        <form class="promptline" id="prompt" autocomplete="off" hidden>
          <label class="promptline__ps" for="cmd">visiteur@portfolio:~$</label>
          <input id="cmd" name="cmd" type="text" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Commande">
        </form>
      </div>
    </section>
    <noscript>
      <p class="container noscript">Ce terminal demande JavaScript. Utilisez le menu pour naviguer : À propos, Projets, Pentest, Contact.</p>
    </noscript>
    <script type="application/json" id="site-data">${json}</script>
    <template id="card-tpl">
      <article class="id-card">
        <div class="id-card__top">
          <span class="id-card__file"><i class="fa-solid fa-id-card" aria-hidden="true"></i> carte-de-visite.card</span>
          <span class="id-card__live"><i class="fa-solid fa-circle" aria-hidden="true"></i> Recherche un stage</span>
        </div>
        <div class="id-card__body">
          <img class="id-card__photo" src="${P.photo}" alt="Portrait de ${esc(P.name)}" width="116" height="116">
          <div class="id-card__main">
            <h2 class="id-card__name">${esc(P.name)}</h2>
            <p class="id-card__role">${esc(P.tagline)}</p>
            <ul class="id-card__facts">
              <li><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i> BUT2 Informatique · IUT2 Grenoble</li>
              <li><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${esc(P.location)}</li>
              <li><i class="fa-solid fa-bullseye" aria-hidden="true"></i> ${esc(P.searching)}</li>
              <li><i class="fa-solid fa-calendar-days" aria-hidden="true"></i> ${esc(P.availability)}</li>
            </ul>
          </div>
        </div>
        ${tags(stack)}
        <div class="id-card__actions">
          <a class="btn btn--sm" href="${P.cv}" download><i class="fa-solid fa-download" aria-hidden="true"></i> Télécharger CV</a>
          <a class="btn btn--ghost btn--sm" href="Projects.html">Voir les projets</a>
          <a class="btn btn--ghost btn--sm" href="Contact.html">Contact</a>
          ${socialLinks('')}
        </div>
      </article>
    </template>`;
  write('index.html', layout({
    rel: 'index.html', title: 'Accueil', active: 'home', body, bodyClass: 'home',
    description: 'Portfolio de Hassimiou BARRY, étudiant en BUT2 Informatique à Grenoble : cybersécurité, DevSecOps et pentest éthique.',
    scripts: ['js/terminal.js'],
  }));
}

/* ---------- 404 ---------- */

function notFoundPage() {
  const body = `    <section class="container page-head">
      <p class="prompt"><span class="prompt__ps">$</span> cd ./cette-page</p>
      <h1>404</h1>
      <p class="lead">bash: cd: cette-page: aucun fichier ou dossier de ce type</p>
      <p><a class="btn" href="index.html">Retour à l'accueil</a></p>
    </section>`;
  write('404.html', layout({
    rel: '404.html', title: 'Page introuvable', body,
    description: 'Page introuvable.',
  }).replace('href="Css/style.css"', 'href="/Portfolio-Hassimiou/Css/style.css"').replace(/(href|src)="(?!https?:|\/|#|mailto:|tel:)([^"]+)"/g, '$1="/Portfolio-Hassimiou/$2"'));
}

/* ---------- Thèmes de couleurs ---------- */

function themesCss() {
  const rules = D.themes
    .filter((x) => !x.default)
    .map((x) => `html[data-theme="${x.id}"] { --green: ${x.hex}; --cyan: ${x.hex2}; --accent-rgb: ${x.rgb}; --accent2-rgb: ${x.rgb2}; }`)
    .join('\n');
  write('Css/themes.css', `/* Généré par tools/build.js à partir de data/site.js : ne pas modifier à la main. */\n${rules}\n`);
}

/* ---------- Exécution ---------- */

themesCss();
homePage();
aboutPage();
redirects();
projectsPage();
pentestPages();
contactPage();
cvPage();
notFoundPage();
D.projects.filter((p) => p.page).forEach(detailPage);

console.log('Pages générées.');
