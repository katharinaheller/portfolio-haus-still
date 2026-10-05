# Haus Still

Portfolio-Demoprojekt – Unternehmen und Geschäftsdaten sind fiktiv.

A complete German-language portfolio demonstration. Company, products, staff roles, business figures and location context are fictional. This is not a real client project or operational business.

**Live:** https://katharinaheller.github.io/portfolio-haus-still/

**Preview:** [Desktop](reports/desktop.png) · [Mobile](reports/mobile.png) · [First viewport](reports/hero.png)

## Client concept

Design-minded boutique retreat concept in Allgäu for couples seeking quiet. Editorial Cormorant typography, forest/cream palette and original architectural concept photography. Primary conversion: explore rooms, calculate a sample stay and complete a local inquiry simulation.

## Stack and architecture

`src/_includes/base.njk` is the shared semantic layout; `src/_data/rooms.json` drives room pagination; independent editorial page templates define compositions. `public/site.js` adds mobile navigation, URL-carried room choice and UTC date arithmetic. No runtime framework.

Locale `de-DE`, German public copy, EUR display. Static output: `_site/`. Each project installs and builds independently; no sibling source import or root workspace dependency is required.

## Local setup

Recommended Node.js **24.16+** (see .nvmrc); npm lockfile supplied. The implementation was also built and checked on the preinstalled Node 24.11; current Astro ESLint packages advertise a higher engine minimum, so use the recommended version for new installations.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
npx playwright install chromium
npm test
```

Default smoke-test preview port is 4173. An existing Chrome installation can be selected with `PLAYWRIGHT_CHANNEL=chrome`; set `TEST_URL` to test an already-running or deployed instance. Tests exercise real interactions and validate the principal user journey. No backend credentials are needed.


## Production build and deployment

```sh
npm run build:production
```

This reads `site.config.json`, sets the correct origin/base path and builds a portable static artifact. `postbuild` generates canonical sitemap/robots files. For a different host, edit site.config.json and rebuild; a plain `npm run build` uses the domain root for local previews. Use BASE_PATH (Astro/Vite/Eleventy), NEXT_PUBLIC_BASE_PATH (Next.js) and SITE_ORIGIN for explicit deployment overrides.

Published on GitHub Pages from the `docs/` directory of the project's public repository. Repository: https://github.com/katharinaheller/portfolio-haus-still. The Pages host is used for a fictional portfolio demonstration; it does not process commerce or provide an operational SaaS service. Cloudflare Pages was preferred but no authenticated local session was available. No paid plans, payment details or paid services were enabled.

To republish: run the production build, synchronize the output into `docs/`, retain `docs/.nojekyll`, commit and push. For Cloudflare Pages, use `npx wrangler pages deploy _site --project-name portfolio-haus-still` after authentication and after configuring a root base path for that host.

## Accessibility, privacy and SEO

Semantic regions, one h1 per page, meaningful titles, skip link, labelled controls, visible focus, mobile navigation with Escape, reduced-motion handling and native or Radix keyboard interactions. Automated axe checks target WCAG 2.2 AA; these do not replace a complete manual assistive-technology audit. Tested responsive widths: 320, 390, 768, 1024, 1440 and 1920 pixels. Keyboard entry and principal navigation verified.

No analytics, marketing scripts, external font calls, maps, embedded videos or unnecessary consent banner. No application cookies or browser storage are used. Forms do not send requests. Hosting still processes ordinary connection data. Legal demo pages are explicitly incomplete for a real operating business; actual operator information and a legal review are needed for a commercial launch.

Unique German title/description, canonical, Open Graph, Twitter card, local social image, SVG favicon, sitemap and robots file. Structured data deliberately describes fictional content and does not fabricate real awards, review ratings or offers. Images include dimensions, responsive variants and useful German alt text.

## Quality evidence

Verified on the public production URL on 2026-10-05: **4/4 functional tests passed**, 11 content routes checked, no console/network/link/image failures and no axe violations in the audited views. Mobile Lighthouse: **100 Performance / 100 Accessibility / 100 Best Practices / 100 SEO**. See the committed machine-readable production reports for scope and timestamps.

Local/production browser audits, screenshots and Lighthouse reports are in `reports/`. Lighthouse figures are single-run mobile lab measurements, not field Core Web Vitals or an INP guarantee. The root PORTFOLIO_OVERVIEW.md records the final verified results. Functional tests live in `tests/`.

## Open-source and assets

Uses Eleventy (https://github.com/11ty/eleventy, MIT) directly as the static publishing foundation. Original Nunjucks templates and structured room data; no third-party hotel template. Eleventy was selected over a React marketing template because the editorial pages require no hydration or application runtime. It supports independently rendered room pages and tiny progressive enhancement for the stay calculator.

See [CREDITS.md](CREDITS.md), [DEPENDENCY_LICENSES.md](DEPENDENCY_LICENSES.md), `licenses/` and `ASSET_PROVENANCE.json` for exact origins, retained notices and media prompts. No template stock images, brand names, customer claims or authentication/payment integrations were retained.

## Known intentional limits

Dependency maintenance: npm audit reports one unpatched braces advisory propagating through five local Eleventy build/watch dependencies. No affected library runs on the published static site. Build trusted inputs only and do not expose the development server. See [SECURITY.md](SECURITY.md) for the exact advisory, scope and upgrade plan.

The house does not exist. The stay planner does not check inventory, collect guest data or book rooms. Categories share one disclosed generated room atmosphere study.
