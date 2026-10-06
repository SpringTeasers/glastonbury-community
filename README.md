# Glastonbury Community Guide

An independent, static community guide to Glastonbury, Connecticut — built with
no build step, no dependencies, and no external font or image requests.

**Live:** https://springteasers.github.io/glastonbury-community/

## Files

| File | What it is |
|---|---|
| `index.html` | Home — wordmark hero, lead + Census citation, three home cards, CTA |
| `about.html` | About — History / Population / Government reading block + quick-facts table |
| `things-to-do.html` | Things to Do — numbered list of parks and landmarks |
| `local-businesses.html` | Local Businesses — 22-entry `<dl>` directory grouped by category |
| `town-services.html` | Town Services — government, health, library and schools cards |
| `news-events.html` | News & Events — sample notice, events with recurring tags |
| `contact.html` | Contact — Town Hall details and about-this-guide |
| `404.html` | Page not found |
| `styles.css` | The entire stylesheet, built from the design tokens only |
| `script.js` | Sticky-header shadow + mobile-menu collapse (nothing depends on it) |
| `favicon.svg` | River line + green marker, palette colours |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

## Running locally

No build step. Serve the folder over HTTP (relative paths must resolve):

```
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Design tokens

Colour and type live in the `:root` block at the top of `styles.css`:
River Deep `#0F3D57` (primary), Mill Red `#A3402E` (accent), Hubbard Sage
`#2F6B4F` (secondary), Welles Cream `#F7F3EC` (page), Paper `#FFFFFF`,
Ink `#1B1F23`, Slate `#4A5560`, Rule `#DBD3C7`, Tint `#E8EFF3`. Body text is
17px at 1.65 line-height; a 68ch measure. Version 1 is light-mode only.

## Accessibility

Skip link first on every page; 3px focus ring on every focusable element;
one `<h1>` per page with no skipped heading levels; full landmark structure;
current page marked by bar, weight *and* `aria-current="page"`; every outbound
link carries `rel="noopener noreferrer"`, a decorative `↗` and an `sr-only`
new-tab announcement; the quick-facts table stacks below 640px; all motion sits
inside a `prefers-reduced-motion` guard; the mobile menu is a native
`<details>`/`<summary>` so the site works with JavaScript disabled.

## Deployment

Static site, deployed to GitHub Pages from the `main` branch root of
`SpringTeasers/glastonbury-community`. Push changes to `main`; Pages rebuilds
automatically.
