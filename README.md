PGConf.dev 2026 Static Site
===========================

This is the source code of the PGConf.dev 2026 static site. The entire site is
rendered with [Svelte], [SvelteKit], and [adapter-static].

Prerequisites
-------------

- NodeJS ≥ 18
- `npm`

### macOS

Install with [Homebrew]:

```bash
brew install node
```

### Debian/Ubuntu

Install via `apt`:

```bash
sudo apt install nodejs npm
```

Setup
-----

Clone the repository and navigate into it:

```bash
git clone git@github.com:slonikevents/2026-pgconfdev-site.git
cd 2026-pgconfdev-site
```

Install dependencies:

```bash
npm install
```

On success, the output should resemble:

```
> 2026-pgconfdev-site@0.0.1 prepare
> svelte-kit sync || echo ''


added 328 packages, and audited 329 packages in 2s

145 packages are looking for funding
  run `npm fund` for details

3 low severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

Developing
----------

To start a development server:

```bash
npm run dev
```

Or to start the server and open the site in a new browser tab:

```bash
npm run dev -- --open
```

The development server supports hot module replacement (HMR). When files change,
it uses a WebSocket connection to push updates or trigger a full browser
reload—no manual refresh needed, assuming the filesystem supports native watch
events.

Building
--------

The site served by the development server closely matches the production build,
so building isn't typically required during development.

Regardless, to generate a production build:

```bash
npm run build
```

You can preview this with `npm run preview`.

Publishing
----------

Simply push to the `main` branch to publish the site. The "[Deploy to GitHub
Pages]" workflow in GitHub Actions listens for changes on this branch.

Editing
-------

Keep it simple—this site is designed to be editable by non-technical people.
When in doubt, write normal HTML and CSS.

> **Note**: The only exception is that static assets (like images), must be
> imported and interpolated into the markup. See [Static Assets](#static-assets)
> below.

Before pushing a change or submitting a PR, run:

```bash
npm run format
npm run lint
```

This ensures your code is properly formatted and free of common issues.

### Svelte Overview

Each `.svelte` file is a _[Svelte component]_ made up of HTML, CSS, and
JavaScript. CSS is scoped to the component by default.

SvelteKit uses the file structure in [`/root`] as the source of the site's
pages.

- Each `+page.svelte` file in [`/root`] defines a page on the site.
- The site-wide layout is defined in [`/root/+layout.svelte`].
- Files without a `+` prefix are helper components or static assets used within
  pages and layouts. Helper components should begin with a capital letter.
- You shouldn't need to modify files outside [`/root`], except to add sponsor
  logos. Each sponsor's logo should be its own component in [`/common/logo`].

For details on how SvelteKit uses different file types to construct the site,
see [SvelteKit routing].

### Adding a Page

To add a new page, create a directory in [`/root`] matching the URL path where
the page should appear, and add a `+page.svelte` file inside it with the page's
content.

For example, to create a page at `/info`, add the file `/root/info/+page.svelte`
with content such as:

```svelte
<script>
  import view from './view.png';
</script>

<style>
  img {
    border-radius: var(--border-radius);
    margin: 1rem;
    max-width: 100%;
  }
</style>

<h1>Info</h1>

<p>This is some information that should be on this page.</p>

<img src={view} alt="View of this info" />
```

### Static Assets

Static assets such as images or PDFs must be imported and referenced using
interpolation. For example, to include a PDF:

```svelte
<script>
  import schedule from './schedule.pdf';
</script>

<a href={schedule} download>Schedule</a>
```

### Content

- Text should be written in [Standard Canadian English]. In Vim, this is `set
  spell spelllang=en_ca`.
- Ensure your content is accessible and responsive across both small and large
  screens. Target breakpoints are `768px` and `1200px`.
- Use semantic HTML. Eschew `<div>`, `<span>`, etc. when a [more appropriate
  element] exists.

[Svelte]: https://svelte.dev/docs/svelte/overview
[SvelteKit]: https://svelte.dev/docs/kit/introduction
[adapter-static]: https://svelte.dev/docs/kit/adapter-static
[Homebrew]: https://brew.sh/
[Deploy to GitHub Pages]: https://github.com/slonikevents/2026-pgconfdev-site/actions/workflows/main.yaml
[Svelte component]: https://svelte.dev/docs/svelte/svelte-files
[`/root`]: /root
[`/root/+layout.svelte`]: /root/+layout.svelte
[`/common/logo`]: /common/logo
[SvelteKit routing]: https://svelte.dev/docs/kit/routing#page
[Standard Canadian English]: https://en.wikipedia.org/wiki/Standard_Canadian_English
[more appropriate element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
