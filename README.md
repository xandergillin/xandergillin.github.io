# GIS Portfolio Template

A multi-page portfolio website you can publish in an afternoon. No HTML experience required.

## What you are getting

A real website with four pages:

- **Home** — your name, a short bio, your three best projects
- **Work** — every project in your portfolio
- **About** — a longer bio, your experience, education, and toolkit
- **Contact** — every way to reach you

Plus a separate **case study page** for each project (the deep-dive that hiring managers actually read).

You only need to edit **one file** to make it yours: `config.js`. Every page on the site reads from that one file, so a change to your name there shows up everywhere at once.

---

## Getting started

### Step 1. Get the files

1. Click the green **"Use this template"** button at the top of this GitHub page.
2. Name your new repo `your-username.github.io` (replacing `your-username` with your real GitHub username). This exact naming pattern is how GitHub Pages publishes a website automatically.
3. Click **"Create repository"**.

### Step 2. Turn on the website

1. In your new repo, click **Settings**.
2. In the left sidebar, click **Pages**.
3. Under "Source," choose **Deploy from a branch**, pick `main`, and click **Save**.
4. Wait about a minute. Your site will appear at `https://your-username.github.io`.

The site is live now. It still says "Jane Cartographer" because you have not edited it yet.

### Step 3. Edit your information (one file)

Open `config.js` in your repo and click the pencil icon to edit. The whole file is one big block of information about you, broken into sections:

- **BASICS** — name, tagline, location, email, social links, headshot path
- **SHORT BIO** — one or two sentences for the homepage
- **LONG BIO** — three to six paragraphs for the About page
- **EDUCATION** — list of schools and degrees
- **EXPERIENCE** — list of jobs and internships
- **SKILLS** — your tools, grouped by category
- **PROJECTS** — the most important section, see below
- **CONTACT** — the lead line on the contact page

Change every value to your own. Be careful to:

- Keep the **quote marks** around each value
- Keep the **commas** at the end of each line
- Do not delete the curly braces `{` `}` or square brackets `[` `]`

Commit your changes. Your site updates within a minute.

### Step 4. Add your photo

1. In your repo, click the `images` folder.
2. Click **"Add file" → "Upload files"** and drag in a square photo of yourself.
3. Either rename it to `headshot.jpg` before committing, or update the `headshot:` line in `config.js` to match whatever name you used.

A square crop around 800x800 pixels works well.

### Step 5. Update your projects

This is where you spend most of your time. In `config.js`, find the `projects:` section. Each project is one `{ ... }` block.

To **edit a project**: change the title, blurb, year, tags, etc. inside its block.

To **add a project**: copy a whole `{ ... }` block, paste it below an existing one, and edit the values. Drop your project image in `images/projects/` and update the `thumbnail:` path.

To **remove a project**: delete its whole `{ ... }` block.

To **feature a project on the homepage**: set `featured: true`. Set it to `false` to keep it on the Work page only. Feature about three.

### Step 6. Write your case studies

This is the highest-impact thing you can do for your portfolio. Hiring managers skim the homepage but actually read the case studies.

For each project, there is a separate HTML file with the same name as the `detailPage:` value in `config.js` (for example, `project-tree-equity.html`).

The file `project-tree-equity.html` is a fully written-out example. Use it as a model. The structure is:

1. **The question** — what were you trying to find out?
2. **What I did** — your approach and methods
3. **What I found** — your results
4. **What I learned** — your reflection (this is the part new graduates skip and it is the most important)
5. **Deliverables** — links to the live map, GitHub repo, PDF report, etc.

To create a new project case study page:

1. Make a copy of `project-tree-equity.html` and rename it (for example, `project-flood-risk.html`).
2. Edit everything inside it for your project.
3. In `config.js`, set that project's `detailPage:` value to your new filename.

### Step 7. (Optional) Pick a different color theme

Open `styles.css`. The first thing in the file is a list of five color themes. The `graphite` theme is active by default. To switch:

1. Find the active `:root { ... }` block (the only one not wrapped in `/* */`).
2. Wrap it in `/*` and `*/` to turn it off.
3. Find the theme you want and remove its `/*` and `*/` to turn it on.

Available themes: `graphite` (warm editorial black/cream), `atlas` (blue on paper), `terrain` (forest green), `nocturne` (dark mode with amber), `risograph` (punchy red on off-white).

---

## You are done

If you only do steps 1 through 6, you have a portfolio you can put on a resume.

## Want to go further?

See [`docs/EXTENSIONS.md`](docs/EXTENSIONS.md) for ten recipes you can add:

- A custom domain (`yourname.com` instead of `username.github.io`)
- An embedded interactive map on your case study pages
- A downloadable PDF resume button
- A light/dark mode toggle
- A "Publications" or "Talks" section
- Custom fonts
- Privacy-friendly analytics
- Image optimization for faster loading
- Open Graph social-share previews
- Per-project favicons

Each is a self-contained recipe. Pick the ones you actually want.

## File map

```
your-portfolio/
├── config.js                      ← edit this one file
├── components.js                  ← do not edit
├── styles.css                     ← edit if you want (theme picker at top)
│
├── index.html                     ← homepage
├── projects.html                  ← work gallery
├── about.html                     ← about page
├── contact.html                   ← contact page
│
├── project-tree-equity.html       ← case study page (one per project)
├── project-acs-uncertainty.html
├── project-kde-traffic.html
├── project-sanborn-mosaic.html
│
├── images/
│   ├── headshot.svg               ← replace with your photo
│   └── projects/
│       ├── tree-equity-thumb.svg  ← replace with your project images
│       └── ...
│
└── docs/
    ├── EXTENSIONS.md              ← recipes for going further
    └── TROUBLESHOOTING.md         ← when something breaks
```

## Stuck?

Read [`docs/TROUBLESHOOTING.md`](docs/TROUBLESHOOTING.md) for fixes to common problems.

If you are really stuck, come to office hours with your repo URL.
