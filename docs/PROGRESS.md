# Progress

## 2026-07-05 — Initial portfolio build

Built the portfolio site from scratch as a pure static page (no build step, no
frameworks, no external requests — system font stacks only).

**Created**
- `index.html` — semantic single page: sticky nav, hero (with `$ whoami`
  terminal motif), projects, skills, contact, footer.
- `styles.css` — dark-first developer aesthetic, single mint accent (`#7ee8c7`),
  monospace accents on a system sans body, subtle grid texture, card
  micro-interactions, full `prefers-color-scheme: light` variant, responsive
  down to 375px, reduced-motion support.
- `script.js` — one `PROJECTS` data array rendered into cards, plus scroll
  reveal via `IntersectionObserver` and a pointer-follow glow on cards.
- `docs/PRD.md` — copy of the product requirements.

**Content**
- Six featured projects: Tales of Veridia (pokemon), Khata (live), Student ERP,
  GoCareer, AI Usage Monitor, MonkeyType for Terminal.
- Skills grouped: Frontend / Backend / Tools.
- Contact: GitHub profile link only (no invented email/social handles).

**Housekeeping**
- Deleted the stale `CNAME` (raja-dev.me) so GitHub Pages serves at
  anuraj-dev.github.io.
- Replaced the one-line README.

**Verified locally**
- Served via `python3 -m http.server`; index.html, styles.css, script.js all
  return 200.
- Only external URLs are the six GitHub repo links, the GitHub profile link, and
  the Khata live link — all confirmed reachable.
