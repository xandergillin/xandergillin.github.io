/* ============================================================
   GIS PORTFOLIO TEMPLATE — SCRIPT
   ============================================================
   This file reads the CONFIG block from index.html and fills
   in the page. You should not need to edit this file.

   If something on the page is showing as blank or "undefined",
   it usually means there is a typo in the CONFIG block — most
   often a missing comma or quote mark.
   ============================================================ */

(function () {
  // Defensive: make sure CONFIG exists before anything else runs.
  if (typeof CONFIG === 'undefined') {
    console.error(
      'CONFIG is not defined. Check the <script> block at the top of ' +
      'index.html — there is probably a missing comma or quote mark.'
    );
    return;
  }

  // Tiny helper to safely set text on an element by id.
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  }

  // ---- Header name + footer copyright ----
  setText('header-name', CONFIG.name);
  setText('name-large', CONFIG.name);
  setText('tagline', CONFIG.tagline);
  setText('location', CONFIG.location);

  // ---- About text (trim whitespace from template literal) ----
  if (CONFIG.about) {
    const aboutEl = document.getElementById('about-text');
    if (aboutEl) aboutEl.textContent = CONFIG.about.replace(/\s+/g, ' ').trim();
  }

  // ---- Headshot ----
  const headshotEl = document.getElementById('headshot');
  if (headshotEl) {
    if (CONFIG.headshot) {
      headshotEl.src = CONFIG.headshot;
      headshotEl.alt = CONFIG.name ? CONFIG.name + ', portrait' : 'Portrait';
    } else {
      headshotEl.remove();
    }
  }

  // ---- Skills list ----
  const skillsEl = document.getElementById('skills-list');
  if (skillsEl && Array.isArray(CONFIG.skills)) {
    skillsEl.innerHTML = '';
    CONFIG.skills.forEach(function (skill) {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsEl.appendChild(li);
    });
  }

  // ---- Contact links ----
  const contactEl = document.getElementById('contact-links');
  if (contactEl) {
    const items = [];
    if (CONFIG.email)    items.push({ label: 'Email',    value: CONFIG.email,    href: 'mailto:' + CONFIG.email });
    if (CONFIG.linkedin) items.push({ label: 'LinkedIn', value: stripProtocol(CONFIG.linkedin), href: CONFIG.linkedin });
    if (CONFIG.github)   items.push({ label: 'GitHub',   value: stripProtocol(CONFIG.github),   href: CONFIG.github });
    if (CONFIG.website)  items.push({ label: 'Website',  value: stripProtocol(CONFIG.website),  href: CONFIG.website });

    items.forEach(function (item) {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href = item.href;
      a.target = item.href.startsWith('mailto:') ? '_self' : '_blank';
      a.rel = 'noopener';
      a.innerHTML =
        '<span class="link-label">' + item.label + '</span>' +
        '<span class="link-value">' + item.value + '</span>';
      li.appendChild(a);
      contactEl.appendChild(li);
    });
  }

  // ---- Footer copyright ----
  const year = new Date().getFullYear();
  setText('footer-copy', '© ' + year + ' ' + (CONFIG.name || ''));

  // ---- Placeholder check (friendly nudge in dev) ----
  // Warns in the browser console if obvious placeholder text is still present.
  const placeholders = [
    'YOUR NAME',
    'yourusername',
    'example.com',
  ];
  const flat = JSON.stringify(CONFIG).toLowerCase();
  const found = placeholders.filter(function (p) {
    return flat.includes(p.toLowerCase());
  });
  if (found.length > 0) {
    console.warn(
      'Heads up: your CONFIG block still has placeholder text (' +
      found.join(', ') +
      '). Open index.html and replace it before publishing.'
    );
  }

  function stripProtocol(url) {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
})();
