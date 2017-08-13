<h1 align="center">
  @weh/layouts
</h1>

<p align="center">
  reusable html layouts for weh
</p>

<p align="center">
  <!-- code coverage -->
  <a href="https://codecov.io/gh/wehjs/layouts"><img src="https://img.shields.io/codecov/c/github/wehjs/layouts.svg?style=flat-square"
  alt="code coverage"></a>
  <!-- travis ci -->
  <a href="https://travis-ci.org/wehjs/layouts"><img src="https://img.shields.io/travis/wehjs/layouts.svg?style=flat-square"
  alt="test status"></a>
  <!-- npm version -->
  <a href="https://npmjs.org/package/@weh/layouts">
    <img src="https://img.shields.io/npm/v/@weh/layouts.svg?style=flat-square"
      alt="npm version" />
  </a>
  <!-- code style -->
  <a href="https://github.com/feross/standard"><img src="https://img.shields.io/badge/code%20style-standard-blue.svg?style=flat-square"
  alt="code style: standard"></a>
  
  <!-- greenkeeper -->
  <a href="https://greenkeeper.io">
    <img src="https://badges.greenkeeper.io/wehjs/weh.svg"
      alt="greenkeeper badge" />  
  </a>
</p>

## Features

- Powerful templating system
- Templates are just JavaScript functions!
- Ability to perform templating on a subset of files

## Installation

```sh
# you will need frontmatter support:
npm install @weh/matter
npm install @weh/layouts
```

## Usage example

```js
const weh = require('@weh/weh')
const matter = require('@weh/matter')
const plugin = require('@weh/layouts')

// a layout is just a js function that returns a string of
// html! it takes the current file and also the total set
// of files
const layout = (file, files) =>
`
<h1>
  ${file.contents}
</h1>
`

// enter our main function:
// the main function should be an async function so that
// it automatically returns a promise
weh(async site => {
  // first we need frontmatter support
  site.use(matter)
  // and now we can initialize layouts
  // (the `layouts` options key takes an object of layouts)
  site.use(layouts, { layouts: { layout } })
  // ...and initiate the build process
  return site
})
```

## Filters

By default, `layouts` only operates on HTML files (files that end with `.html`).
This can be changed easily by using a custom filter. A filter is a function that
takes a file and returns a boolean that describes whether that file should have
`layouts` enabled or not. A custom filter can look like this:

```js
function myCustomFilter (file, options, files) {
  return file.path.endsWith('.md')
}
```

This filter only matches for Markdown files. If you wanted to match on multiple file
extensions at the same time, you could do something like this:

```js
const fileExtension = file => file.path.split('.').pop()

function myOtherCustomFilter (file, options, files) {
  return ['md', 'html'].some(e => fileExtension(file) === e)
}
```

To use the filter, just pass it into the plugin options:

```js
weh(async site => {
  site.use(matter)
  site.use(layouts, {layouts: {...}, filter: myCustomFilter})
  return site
})
```

## Development

To work on this repository, clone it and install the npm dependencies:

```sh
git clone https://github.com/wehjs/layouts
cd layouts
npm install
```

There are a couple of npm scripts provided for convenience:

- `npm test` - runs linters and ava in ci mode
- `npm run lint` - runs linters
- `npm run ava` - only runs ava once
- `npm run ava:ci` - runs ava in ci mode (generates coverage data)
- `npm run ava:watch` - runs ava in watch mode
- `npm run coverage` - generates coverage data
- `npm run update-coc` - pulls the latest `weallbehave` code of conduct
- `npm run deploy` - publishes npm package using `np`

## Maintainers

- Olivia Hugger <[olivia@fastmail.com](mailto:olivia@fastmail.com)>

## Code of Conduct

This repository operates under the [`weallbehave`](https://github.com/wealljs/weallbehave) Code of Conduct. Its contents can be found in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## License

MIT (see [LICENSE](LICENSE) document)
