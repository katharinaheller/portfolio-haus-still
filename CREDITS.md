# Credits and provenance — Haus Still

Portfolio-Demoprojekt – Unternehmen und Geschäftsdaten sind fiktiv.

## Foundation and modifications

Uses Eleventy (https://github.com/11ty/eleventy, MIT) directly as the static publishing foundation. Original Nunjucks templates and structured room data; no third-party hotel template. Eleventy was selected over a React marketing template because the editorial pages require no hydration or application runtime. It supports independently rendered room pages and tiny progressive enhancement for the stay calculator.

Exact upstream MIT texts are retained in `licenses/` for studied/adapted priority repositories. The dependency inventory is in `DEPENDENCY_LICENSES.md`. Package manager lockfiles pin the inspected dependency graph.

## Typefaces

Cormorant Garamond + Manrope — Cormorant Project Authors; Manrope Project Authors. Source: https://github.com/CatharsisFonts/Cormorant ; https://github.com/sharanda/manrope. Delivered by the corresponding Fontsource npm packages, licensed SIL Open Font License 1.1. Complete notices are retained in `licenses/*-OFL.txt`. Latin WOFF2 includes German umlauts/ß; fonts are locally served. Variable faces use one file; DM Serif Display uses only its regular weight. No Google Fonts requests.

## Media and original design

Two original AI-generated concept photographs (hotel and room, each in 480/960/1536 widths). They illustrate a fictional house; room categories intentionally share one disclosed atmosphere study. No claim that the hotel/location exists.

All raster concept imagery was created for this project with the built-in image generation tool on 2026-10-05. Prompt records are in `ASSET_PROVENANCE.json`. These generated outputs are not CC0 stock photographs and are not claimed to be copyright-exclusive. No third-party photograph or image-source license was inferred from a source-code license. The assets were selected, visually reviewed, converted to responsive WebP and shipped locally. Original generations were retained in the generation archive. OpenAI terms governing the generation service apply to the outputs; no separate stock license or paid stock source was used.

Logos, SVG favicons, CSS graphic elements and the social card are original project-specific code-native work. Icons are original simple SVG/CSS or generic Unicode symbols, not an imported icon library. No audio, external video, commercial template, copied brand asset or unlicensed texture is included.

## Libraries

Runtime/build libraries and exact versions/licenses are listed in `DEPENDENCY_LICENSES.md`. Three.js, Astro, Eleventy, Next.js, React, Radix UI and glTF Transform are used only where present in this project's package.json. Retained direct dependency notices are in `licenses/dependencies/`. Test tooling includes Playwright (Apache-2.0) and ESLint/TypeScript-related packages under their package licenses. No licensing guarantee is made beyond the inspected files and recorded provenance.

