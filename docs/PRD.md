# PRD: Portfolio website (Anuraj-dev.github.io)

## Problem Statement

Recruiters and freelance clients who look up Anuraj Jit Saikia find no working portfolio: the GitHub Pages repo contains only a stale CNAME (raja-dev.me, which now points at Vercel and renders an empty page). There is no single place that presents who he is, what he has built, and how to reach him.

## Solution

A fast, single-page static portfolio served directly by GitHub Pages at anuraj-dev.github.io: hero/bio, featured projects pulled from his strongest public repos, a skills section, and contact links — no build step, no framework, so it can never rot from dependency churn.

## User Stories

1. As a recruiter, I want a 10-second overview (name, role, education) above the fold, so that I can qualify the candidate immediately.
2. As a recruiter, I want featured projects with one-line pitches and tech tags, so that I can judge breadth and depth quickly.
3. As a recruiter, I want each project to link to its GitHub repo, so that I can inspect real code.
4. As a freelance client, I want to see live/deployed work (Khata, GoCareer-style apps), so that I trust he can ship.
5. As a freelance client, I want a clear contact route, so that I can start a conversation.
6. As a visitor on mobile, I want the page fully responsive, so that nothing is cut off or unreadable.
7. As a visitor with dark-mode preference, I want the site to respect prefers-color-scheme, so that it doesn't blind me.
8. As a visitor on slow internet, I want the page to load in under a second (no frameworks, no webfonts blocking render), so that I don't bounce.
9. As Anuraj, I want project data in one obvious place in the code, so that I can add projects without touching layout.
10. As Anuraj, I want the site served at anuraj-dev.github.io without the stale custom-domain CNAME, so that the URL actually works.
11. As a screen-reader user, I want semantic landmarks and alt text, so that the page is navigable.
12. As a recruiter, I want a skills section grouped by area (frontend, backend, tools), so that I can match against a job spec.

## Implementation Decisions

- Pure static HTML + CSS + vanilla JS in the repo root (index.html, styles.css, script.js); GitHub Pages serves the default branch. No build step, no external CDN dependencies.
- Delete the stale CNAME file (raja-dev.me is served by Vercel now; keeping it creates domain ambiguity).
- Project data lives in a single JS array (title, pitch, tech tags, repo URL, live URL where real) rendered into cards.
- Featured projects (all public, verified): pokemon ("Tales of Veridia"), Khata (live at khata.raja-dev.me), student_erp, GoCareer, ai-usage-monitor, MonkeyType-for-terminal.
- Contact: GitHub profile link only plus mailto omitted — no invented emails or social URLs. Placeholder spots for LinkedIn left out entirely.
- Design: distinctive, non-generic (no default Inter-on-purple-gradient); dark/light via prefers-color-scheme; subtle motion only.
- docs/ folder in the repo follows the per-repo context system (PRD + progress notes) per the owner's convention.

## Testing Decisions

- External behavior only: the rendered page in a real browser is the seam. Verify with browser screenshots (desktop + mobile viewport): hero visible above fold, all project links resolve to 200 public repos, dark and light schemes both legible, no horizontal scroll on 375px.
- No JS unit tests — the only logic is a render loop over a static array; a broken render is immediately visible at the seam.
- Post-deploy check: https://anuraj-dev.github.io returns 200 and renders the hero.

## Out of Scope

- Custom domain wiring (raja-dev.me stays on Vercel; owner decides later).
- Blog, CMS, analytics, contact forms (no backend exists).
- Changing the private `portfolio` repo or the Vercel deployment.

## Further Notes

Built overnight as part of the profile-professionalization run; owner should review copy in the morning and may want to point raja-dev.me here.
