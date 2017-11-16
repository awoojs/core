<h1 align="center">
  awoo-pretty
</h1>

<p align="center">
  nice pretty links for awoo
</p>

<p align="center">
  <!-- npm version -->
  <a href="https://npmjs.org/package/awoo-pretty">
    <img src="https://img.shields.io/npm/v/awoo-pretty.svg?style=flat-square"
      alt="npm version" />
  </a>
  <!-- code style -->
  <a href="https://github.com/feross/standard"><img src="https://img.shields.io/badge/code%20style-standard-blue.svg?style=flat-square"
  alt="code style: standard"></a>
</p>

## Installation

```sh
npm install awoo-pretty
```

## Usage example

```js
const awoo = require('awoo')
const plugin = require('awoo-pretty')

// enter our main function:
// the main function should be an async function so that
// it automatically returns a promise
awoo(async site => {
  // we use the plugin
  site.use(plugin)
  // ...and initiate the build process
  return site
})
```

## Filters

By default, `pretty` operates on all HTML files (files that end with `.html`).
This can be changed easily by using a custom filter. A filter is a function that
takes a file and returns a boolean that describes whether that file should have
`pretty` enabled or not. A custom filter can look like this:

```js
function myCustomFilter (file, options, files) {
  return file.path.includes('my-dir/')
}
```

This filter only matches HTML files that are located in the `my-dir` directory.

To use the filter, just pass it into the plugin options:

```js
awoo(async site => {
  site.use(pretty, {filter: myCustomFilter})
  return site
})
```

## Maintainers

- Olivia Hugger <[olivia@fastmail.com](mailto:olivia@fastmail.com)>

## License

MIT (see [LICENSE](LICENSE) document)
