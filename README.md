# SpaceWhale Docs

Central documentation site for SpaceWhale Unity Editor tools, built with
[MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and hosted free
on GitHub Pages.

**Live site:** https://overgast.github.io/spacewhale-docs/

## Repository layout

```
spacewhale-docs/
├─ mkdocs.yml                     # site config + navigation (all assets)
├─ requirements.txt               # pinned toolchain for reproducible builds
├─ docs/
│  ├─ index.md                    # SpaceWhale landing page
│  ├─ assets/                     # site-wide assets (logo, favicon)
│  ├─ stylesheets/extra.css       # brand theme overrides
│  └─ hierarchy-inspector/        # one folder per asset
│     ├─ index.md
│     ├─ getting-started.md
│     ├─ features/
│     ├─ theme/
│     ├─ support.md
│     └─ assets/                  # this asset's screenshots
└─ .github/workflows/deploy.yml   # builds + publishes on push to main
```

## Local preview

Requires Python 3.9+.

```bash
python -m venv .venv
.venv/Scripts/activate          # Windows
# source .venv/bin/activate     # macOS / Linux
pip install -r requirements.txt
mkdocs serve
```

Open the printed URL (defaults to `http://127.0.0.1:8000/spacewhale-docs/`).
The server live-reloads on file changes.

## Adding a new asset

1. Create `docs/<asset-slug>/` and drop the asset's markdown + an `assets/`
   folder for its images.
2. Add a top-level block to `nav:` in `mkdocs.yml` (copy the Hierarchy
   Inspector block as a template).
3. Add a card for it on `docs/index.md`.
4. Commit and push to `main`; the site redeploys automatically.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to the `gh-pages` branch via `mkdocs gh-deploy`. GitHub
Pages must be configured to serve from the `gh-pages` branch (root).

## Content conventions

- Callouts use MkDocs Material admonitions: `!!! info`, `!!! success`,
  `!!! warning`, `!!! danger`.
- Do not use em dashes in page copy.
- Store each asset's images under that asset's own `assets/` folder and
  reference them with relative paths.
