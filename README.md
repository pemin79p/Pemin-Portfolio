# Pemin Sara P — Portfolio

A single-page portfolio site styled as a **git commit log** — each project is a
"commit" with a hash, message, and diff-style bullet points, echoing the
git-heavy MERN + blockchain workflow described in the resume.

## Files

```
pemin-portfolio/
├── index.html    ← structure & content
├── styles.css    ← all styling (design tokens at the top)
└── script.js     ← scroll-reveal for the commit ledger + footer year
```

No build step, no dependencies — pure HTML/CSS/JS.

## Preview locally

Just open `index.html` in a browser, or run a tiny local server:

```bash
cd pemin-portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages (matches the resume's existing setup)

1. Create a new repo, e.g. `pemin79p.github.io` (for a root-level personal site)
   or any repo name if you'll use Project Pages.
2. Push these three files to the repo root:
   ```bash
   git init
   git add .
   git commit -m "Portfolio: initial commit"
   git branch -M main
   git remote add origin https://github.com/pemin79p/<repo-name>.git
   git push -u origin main
   ```
3. In the repo → **Settings → Pages** → Source: `Deploy from a branch` →
   Branch: `main` / root.
4. Your site goes live at `https://pemin79p.github.io/` (if the repo is named
   `pemin79p.github.io`) or `https://pemin79p.github.io/<repo-name>/` otherwise.

## Customizing content

Everything is plain text in `index.html` — no CMS or data file. To edit:

- **Projects**: each is an `<article class="commit">` block inside `#log`.
  Duplicate a block to add a new project; update the `hash`, `date`,
  title, description, diff bullets (`<li class="diff__add">`), and tags.
- **Stack**: grouped lists inside `#stack` under `.stack__pkg`.
- **History** (internship/education): `.branch` blocks inside `#history`.
- **Contact**: links inside the footer `.contact__grid`.

## Design notes

- **Palette**: dark terminal (`#0D1117`) for the hero/footer, a light "paper
  ledger" (`#EEF1F4`) for the body, amber (`#B9791C`) as the commit-hash /
  highlight accent, teal (`#1B6E62`) for "added" diff lines and verified
  badges.
- **Type**: JetBrains Mono for display/headings, IBM Plex Mono for
  labels/hashes/tags, IBM Plex Sans for body copy.
- **Motion**: a blinking terminal cursor in the hero, and commit cards fade
  up into place on scroll. Both respect `prefers-reduced-motion`.
