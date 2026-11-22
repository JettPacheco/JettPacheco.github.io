# Portfolio architecture

Astro renders the portfolio from TypeScript data into static HTML. [`src/pages/index.astro`](src/pages/index.astro) builds the homepage grid. [`src/pages/projects/[slug].astro`](src/pages/projects/%5Bslug%5D.astro) generates one detail page per project. Both use the shared layout and styles.

[`src/projects.ts`](src/projects.ts) defines the project titles, URL slugs, cover selections, and ordered paragraphs and figures. [`src/images.ts`](src/images.ts) supplies image dimensions, display widths, and alt text. The WebP files and smaller card thumbnails live in [`public/images/`](public/images/).

[`src/styles/theme.css`](src/styles/theme.css) controls typography, colors, spacing, and the shared graph-paper lines. [`src/styles/site.css`](src/styles/site.css) applies those values to the page background, responsive card grid, and detail panels.

`npm run dev` shows changes as you edit, and `npm run build` writes the static site to `dist/`. Links and image paths use the build’s base URL so they work under a GitHub Pages repository path.
