# Security scope and dependency advisory

Checked 2026-10-05. This project deploys static HTML, CSS, locally hosted fonts/images and a small browser script. No Node.js service, Eleventy server, template renderer or upload endpoint is exposed in production.

`npm audit` reports five high-severity package entries caused by one underlying advisory in `braces` 3.0.3, reached through `chokidar` 3.6.0 in Eleventy, its development server and Nunjucks. These are build/watch tools, not shipped browser dependencies. Full evidence: [reports/npm-audit.json](reports/npm-audit.json).

The [reviewed upstream advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) describes stack exhaustion on deeply nested attacker-controlled brace patterns; it lists no patched version. The installed Eleventy 3.1.6 and braces 3.0.3 were the current stable releases at inspection. npm's suggested downgrade to Eleventy 0.6.0 is not an appropriate remediation and has not been applied.

Build only this trusted source tree. Do not process untrusted templates, filenames, glob patterns or source archives. Keep the local Eleventy development server on a trusted development machine and do not publish or port-forward it. Production uses only the `_site` static output on GitHub Pages. Recheck the advisory and upgrade the toolchain when a supported fix becomes available.

The vulnerable library is absent from the deployed JavaScript and is not exposed to site visitors. This is an exposure assessment of this architecture, not a claim that the upstream issue is fixed or that all software is vulnerability-free.
