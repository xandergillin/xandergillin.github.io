/* ============================================================
   GIS PORTFOLIO TEMPLATE — COMPONENTS
   ============================================================
   This file reads CONFIG and injects shared parts of the site
   (header, footer, project lists, etc.) into every page.

   You should not need to edit this file. If you want to change
   what links appear in the nav, scroll to the renderHeader()
   function. If you want to change the order of sections on a
   page, edit the HTML file directly.
   ============================================================ */

(function () {
  if (typeof CONFIG === 'undefined') {
    console.error(
      'CONFIG is not defined. Make sure config.js loads before components.js.'
    );
    return;
  }


  // ---- Helpers --------------------------------------------------

  function $(sel)   { return document.querySelector(sel); }
  function $$(sel)  { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function setText(sel, value) {
    const el = $(sel);
    if (el && value) el.textContent = clean(value);
  }
  function clean(str) {
    // Collapse template-literal whitespace
    return String(str).replace(/\s+/g, ' ').trim();
  }
  function paragraphs(str) {
    // Split a long block into paragraphs at blank lines
    return String(str)
      .split(/\n\s*\n/)
      .map(function (p) { return clean(p); })
      .filter(Boolean);
  }
  function escapeHTML(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function stripProtocol(url) {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }


  // ---- Header (shared across all pages) -------------------------

  function renderHeader() {
    const host = $('#site-header');
    if (!host) return;

    const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    function active(file) { return path === file ? 'is-active' : ''; }

    host.innerHTML =
      '<div class="header-inner">' +
        '<a class="header-mark" href="index.html">' +
          '<span class="mark-glyph">◐</span>' +
          '<span class="mark-text">' + escapeHTML(CONFIG.name || '') + '</span>' +
        '</a>' +
        '<nav class="header-nav">' +
          '<a href="index.html"     class="' + active('index.html') + '">Home</a>' +
          '<a href="projects.html"  class="' + active('projects.html') + '">Work</a>' +
          '<a href="about.html"     class="' + active('about.html') + '">About</a>' +
          '<a href="contact.html"   class="' + active('contact.html') + '">Contact</a>' +
        '</nav>' +
      '</div>';
  }


  // ---- Footer (shared across all pages) -------------------------

  function renderFooter() {
    const host = $('#site-footer');
    if (!host) return;

    let year = CONFIG.footerYear;
    if (year === 'auto' || !year) year = new Date().getFullYear();

    host.innerHTML =
      '<div class="footer-inner">' +
        '<span class="footer-copy">&copy; ' + year + ' ' + escapeHTML(CONFIG.name || '') + '</span>' +
        '<span class="footer-built">Built with HTML, CSS, and care.</span>' +
      '</div>';
  }


  // ---- Document title ------------------------------------------

  function renderTitle() {
    const explicit = $('title');
    const pageTitle = explicit ? explicit.getAttribute('data-page') : '';
    const base = (CONFIG.name || '') + (CONFIG.siteTitle ? ' — ' + CONFIG.siteTitle : '');
    document.title = pageTitle ? (pageTitle + ' · ' + base) : base;
  }


  // ---- Basics on every page (hero, contact lines) --------------

  function renderBasics() {
    setText('[data-bind=name]',     CONFIG.name);
    setText('[data-bind=tagline]',  CONFIG.tagline);
    setText('[data-bind=location]', CONFIG.location);

    const heroPhoto = $('[data-bind=headshot]');
    if (heroPhoto) {
      if (CONFIG.headshot) {
        heroPhoto.src = CONFIG.headshot;
        heroPhoto.alt = (CONFIG.name || '') + ', portrait';
      } else {
        const wrap = heroPhoto.closest('.hero-photo');
        if (wrap) wrap.remove();
      }
    }

    setText('[data-bind=shortBio]', CONFIG.shortBio);
  }


  // ---- Project card markup -------------------------------------

  function projectCardHTML(p) {
    const tags = (p.tags || []).map(function (t) {
      return '<li>' + escapeHTML(t) + '</li>';
    }).join('');

    const detail = p.detailPage || ('#' + (p.slug || ''));

    return (
      '<a class="project-card" href="' + escapeHTML(detail) + '">' +
        '<div class="project-image">' +
          (p.thumbnail
            ? '<img src="' + escapeHTML(p.thumbnail) + '" alt="' + escapeHTML(p.title || '') + '" loading="lazy" />'
            : '') +
        '</div>' +
        '<div class="project-body">' +
          '<div class="project-meta">' +
            '<span class="project-year">' + escapeHTML(p.year || '') + '</span>' +
            '<span class="project-type">' + escapeHTML(p.type || '') + '</span>' +
          '</div>' +
          '<h3 class="project-title">' + escapeHTML(p.title || '') + '</h3>' +
          '<p class="project-blurb">' + escapeHTML(clean(p.blurb || '')) + '</p>' +
          '<ul class="project-tags">' + tags + '</ul>' +
          '<span class="project-cta">Read case study →</span>' +
        '</div>' +
      '</a>'
    );
  }


  // ---- Project list (homepage shows featured; projects page shows all) --

  function renderProjects() {
    const list = $('[data-bind=projects]');
    if (!list) return;
    const mode = list.getAttribute('data-mode') || 'all';   // 'featured' or 'all'
    const projects = (CONFIG.projects || []).filter(function (p) {
      return mode === 'featured' ? p.featured : true;
    });
    list.innerHTML = projects.map(projectCardHTML).join('');
  }


  // ---- About page sections (bio, education, experience, skills) ---

  function renderLongBio() {
    const host = $('[data-bind=longBio]');
    if (!host || !CONFIG.longBio) return;
    host.innerHTML = paragraphs(CONFIG.longBio)
      .map(function (p) { return '<p>' + escapeHTML(p) + '</p>'; })
      .join('');
  }

  function renderEducation() {
    const host = $('[data-bind=education]');
    if (!host || !Array.isArray(CONFIG.education)) return;
    host.innerHTML = CONFIG.education.map(function (e) {
      return (
        '<li class="cv-row">' +
          '<div class="cv-row-time">' + escapeHTML(e.year || '') + '</div>' +
          '<div class="cv-row-body">' +
            '<div class="cv-row-title">' + escapeHTML(e.degree || '') + '</div>' +
            '<div class="cv-row-org">'   + escapeHTML(e.school || '') + '</div>' +
            (e.note ? '<div class="cv-row-note">' + escapeHTML(e.note) + '</div>' : '') +
          '</div>' +
        '</li>'
      );
    }).join('');
  }

  function renderExperience() {
    const host = $('[data-bind=experience]');
    if (!host || !Array.isArray(CONFIG.experience)) return;
    host.innerHTML = CONFIG.experience.map(function (e) {
      return (
        '<li class="cv-row">' +
          '<div class="cv-row-time">' + escapeHTML(e.years || '') + '</div>' +
          '<div class="cv-row-body">' +
            '<div class="cv-row-title">' + escapeHTML(e.role || '') + '</div>' +
            '<div class="cv-row-org">'   + escapeHTML(e.org || '') + '</div>' +
            (e.blurb ? '<div class="cv-row-note">' + escapeHTML(e.blurb) + '</div>' : '') +
          '</div>' +
        '</li>'
      );
    }).join('');
  }

  function renderSkills() {
    const host = $('[data-bind=skillGroups]');
    if (!host || !Array.isArray(CONFIG.skillGroups)) return;
    host.innerHTML = CONFIG.skillGroups.map(function (g) {
      const items = (g.skills || []).map(function (s) {
        return '<li>' + escapeHTML(s) + '</li>';
      }).join('');
      return (
        '<div class="skill-group">' +
          '<h3 class="skill-group-label">' + escapeHTML(g.label || '') + '</h3>' +
          '<ul class="skill-group-list">' + items + '</ul>' +
        '</div>'
      );
    }).join('');
  }


  // ---- Contact page --------------------------------------------

  function renderContact() {
    setText('[data-bind=contactLead]', CONFIG.contactLead);

    const host = $('[data-bind=contactLinks]');
    if (!host) return;

    const items = [];
    if (CONFIG.email)    items.push({ label: 'Email',    value: CONFIG.email,    href: 'mailto:' + CONFIG.email });
    if (CONFIG.linkedin) items.push({ label: 'LinkedIn', value: stripProtocol(CONFIG.linkedin), href: CONFIG.linkedin });
    if (CONFIG.github)   items.push({ label: 'GitHub',   value: stripProtocol(CONFIG.github),   href: CONFIG.github });
    if (CONFIG.website)  items.push({ label: 'Website',  value: stripProtocol(CONFIG.website),  href: CONFIG.website });

    host.innerHTML = items.map(function (item) {
      const isMail = item.href.indexOf('mailto:') === 0;
      return (
        '<li><a href="' + escapeHTML(item.href) + '"' +
        (isMail ? '' : ' target="_blank" rel="noopener"') + '>' +
          '<span class="link-label">' + escapeHTML(item.label) + '</span>' +
          '<span class="link-value">' + escapeHTML(item.value) + '</span>' +
        '</a></li>'
      );
    }).join('');
  }


  // ---- Placeholder warning -------------------------------------

  function checkPlaceholders() {
    const flat = JSON.stringify(CONFIG).toLowerCase();
    const found = ['your name', 'yourusername', 'example.com'].filter(function (p) {
      return flat.indexOf(p) !== -1;
    });
    if (found.length) {
      console.warn(
        'Heads up: your CONFIG still has placeholder text (' + found.join(', ') +
        '). Open config.js and replace it before publishing.'
      );
    }
  }


  // ---- Run everything ------------------------------------------

  document.addEventListener('DOMContentLoaded', function () {
    renderHeader();
    renderFooter();
    renderTitle();
    renderBasics();
    renderProjects();
    renderLongBio();
    renderEducation();
    renderExperience();
    renderSkills();
    renderContact();
    checkPlaceholders();
  });
})();
