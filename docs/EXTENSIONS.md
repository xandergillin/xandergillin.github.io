# Extensions

A menu of recipes for going past the baseline. Pick the ones you want. Each is self-contained and they can be done in any order.

## Table of contents

1. [Custom domain](#1-custom-domain)
2. [Embed an interactive map in a case study](#2-embed-an-interactive-map-in-a-case-study)
3. [Add a downloadable PDF resume button](#3-add-a-downloadable-pdf-resume-button)
4. [Add a Publications or Talks page](#4-add-a-publications-or-talks-page)
5. [Light/dark mode toggle](#5-lightdark-mode-toggle)
6. [Custom fonts](#6-custom-fonts)
7. [Privacy-friendly analytics](#7-privacy-friendly-analytics)
8. [Make your project images load faster](#8-make-your-project-images-load-faster)
9. [Open Graph social share previews](#9-open-graph-social-share-previews)
10. [A favicon (the little tab icon)](#10-a-favicon-the-little-tab-icon)

---

## 1. Custom domain

Buy a domain (Namecheap, Cloudflare, Porkbun, around $10-15 a year).

1. In your repo, create a file called `CNAME` (no extension) containing only your domain on one line, e.g., `janecartographer.com`.
2. In your domain registrar's DNS settings, add A records pointing to GitHub's IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. In your repo's **Settings → Pages**, your custom domain should verify within a few minutes.

DNS can take up to 24 hours to propagate. Be patient.

---

## 2. Embed an interactive map in a case study

This is the killer feature for a GIS portfolio. Use this if you have a Leaflet, MapLibre, or ArcGIS web map hosted somewhere (GitHub Pages, ArcGIS Online, Mapbox Studio).

In your project case study HTML (e.g., `project-tree-equity.html`), replace the `<section class="project-hero">` block with:

```html
<section class="project-hero">
  <figure>
    <iframe
      src="https://your-map-url-here"
      style="width: 100%; height: 600px; border: 0; display: block;"
      title="Interactive map of [describe your map]">
    </iframe>
    <figcaption>Click and drag to explore. The map uses live data.</figcaption>
  </figure>
</section>
```

The map will load right inside the page. Make sure your hosted map is set to allow iframe embedding.

---

## 3. Add a downloadable PDF resume button

1. Drop your resume PDF in your repo's root (e.g., `resume.pdf`).
2. In `config.js`, you can add a resume URL by adding this anywhere in the CONFIG object:

```js
resumeUrl: "resume.pdf",
```

3. In `about.html`, just after the `</section>` that closes `.about-page`, add:

```html
<section style="padding-top: 0;">
  <a href="resume.pdf" download class="link-primary">Download my resume (PDF) →</a>
</section>
```

---

## 4. Add a Publications or Talks page

Create a new file `publications.html` by copying `contact.html` as a starting template. Then in the `<main>` section, replace the content with your list:

```html
<section class="page-head">
  <p class="page-eyebrow">Section · 05</p>
  <h1 class="page-title">Publications & Talks</h1>
</section>

<section>
  <ul class="contact-links">
    <li><a href="https://link-to-paper">
      <span class="link-label">2025 · Peer-reviewed</span>
      <span class="link-value">Title of your paper</span>
    </a></li>
    <li><a href="https://link-to-talk">
      <span class="link-label">2024 · Talk</span>
      <span class="link-value">Title of your talk, at Conference Name</span>
    </a></li>
  </ul>
</section>
```

Then add it to the nav. Open `components.js`, find the `renderHeader()` function, and add another `<a>` line inside the `header-nav` div for your new page.

---

## 5. Light/dark mode toggle

Add this just before `</body>` in each page (or, simpler, add to the `renderFooter()` function in `components.js`):

```html
<button id="theme-toggle" style="position:fixed;bottom:20px;right:20px;padding:10px 14px;font-family:'JetBrains Mono',monospace;font-size:12px;background:var(--bg-alt);color:var(--ink);border:1px solid var(--rule);cursor:pointer;z-index:10;">
  ◐ Theme
</button>
<script>
  document.getElementById('theme-toggle').addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });
  if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark');
</script>
```

Then at the very bottom of `styles.css`, add:

```css
html.dark {
  --bg:        #15181c;
  --bg-alt:    #1c2026;
  --ink:       #f0ebe0;
  --ink-soft:  #c4bdb0;
  --ink-faint: #807a70;
  --rule:      #2a2e35;
  --accent:    #d4a14a;
  --accent-soft: #3a2f1c;
}
```

---

## 6. Custom fonts

The template uses Fraunces + Inter Tight + JetBrains Mono. To swap:

1. Find your fonts on [Google Fonts](https://fonts.google.com) or [Fontshare](https://fontshare.com).
2. Copy their `<link>` tag and paste it into the `<head>` of every HTML file, replacing the existing font link.
3. In `styles.css`, do a find-and-replace for `'Fraunces'` and `'Inter Tight'` with your new font names.

Pairings that look great with this template's aesthetic:

- **Editorial**: `Playfair Display` + `Source Sans 3`
- **Modern**: `Instrument Serif` + `Inter`
- **Geometric**: `Syne` + `Manrope`
- **Brutalist**: `Space Grotesk` + `JetBrains Mono`
- **Warm/handmade**: `Caladea` + `Karla`

---

## 7. Privacy-friendly analytics

For [Plausible](https://plausible.io) (paid, no cookies, no GDPR popup), add this to the `<head>` of every HTML file:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

For Google Analytics 4, paste your snippet from analytics.google.com into the `<head>` of every page.

To avoid pasting into every page: move the analytics snippet into a small JS function inside `components.js` and have it run on `DOMContentLoaded`.

---

## 8. Make your project images load faster

Big images make your site slow. Before uploading:

1. Resize to a max of 1600px on the longest side.
2. Save as `.jpg` (for photos) or `.webp` (smaller).
3. Aim for under 300 KB per image.

Tools: [Squoosh](https://squoosh.app) (free, in-browser), or `magick input.jpg -resize 1600x -quality 82 output.jpg` with ImageMagick.

The template already adds `loading="lazy"` to project thumbnails so they only download when scrolled into view.

---

## 9. Open Graph social share previews

When someone shares your portfolio link on LinkedIn, Slack, or Twitter, you want it to show a nice preview with an image. Add these to the `<head>` of `index.html`:

```html
<meta property="og:title" content="Jane Cartographer — GIS Portfolio">
<meta property="og:description" content="GIS Analyst & Community-Engaged Cartographer">
<meta property="og:image" content="https://yourdomain.com/images/og-preview.jpg">
<meta property="og:url" content="https://yourdomain.com">
<meta name="twitter:card" content="summary_large_image">
```

Then create an image at `images/og-preview.jpg` that is 1200x630 pixels. A screenshot of one of your maps works great.

---

## 10. A favicon (the little tab icon)

1. Make a 32x32 PNG (a single letter or a simple icon works).
2. Save it as `favicon.png` in your repo root.
3. Add this to the `<head>` of each page (or to `components.js` so it injects automatically):

```html
<link rel="icon" type="image/png" href="favicon.png">
```

The compass glyph (◐) used in the site header makes a great favicon. Drop it in a 32x32 SVG with the accent color.

---

## Have a different idea?

Bring it to office hours. The whole point of having your own HTML site is that you can change anything. The template is just the starting point.
