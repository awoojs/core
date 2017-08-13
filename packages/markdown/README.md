<div align="center">
<h1>
  @weh/markdown
</h1>

<p>
  A Markdown parsing plugin for the <a href="https://github.com/wehjs/weh">weh static site generator</a>
</p>

<p>
  <!-- npm version -->
  <a href="https://npmjs.org/package/@weh/markdown">
    <img src="https://img.shields.io/npm/v/@weh/markdown.svg?style=flat-square"
      alt="npm version" />
  </a>
  <!-- code style -->
  <a href="https://github.com/feross/standard"><img src="https://img.shields.io/badge/code%20style-standard-blue.svg?style=flat-square"
  alt="code style: standard"></a>
</p>
</div>

## Features

- **Parse Markdown content** in text files within the [weh](https://github.com/wehjs/weh) `files` array
- **Custom filter functions** to include or exclude files from transforms

## Installation

```sh
npm install --save @weh/markdown
```

## Usage example

```js
const weh = require('@weh/weh')
const markdown = require('@weh/markdown')

// enter our main function:
// the main function should be an async function so that
// it automatically returns a promise
weh(async site => {
  // we register our plugin...
  site.use(markdown)
  // ...and initiate the build process
  return site
})
```

## Filter example

You can pass a custom filter as an option to `markdown` to include or exclude files.

A filter is a function that takes the arguments `file`, `options`, and `files`. `file` is the current file, `options` is the options object passed to `markdown`, and `files` is the entire array of files created by `weh`.

If the filter function returns `true`, `markdown` applies its transforms to the contents of the current `file` object. Otherwise the `file` object remains unchanged.

The default filter in `markdown` returns true only for files ending with `.md`:

```js
function myCustomFilter (file, options, files) {
  return file.path.endsWith('.md')
}
```

This is how you could use a filter to apply `markdown` to every file:

```js
const weh = require('@weh/weh')
const markdown = require('@weh/markdown')

// custom filter function
// always returns true
function myCustomFilter (file, options, files) {
  return true
}

weh(async site => {
  // we register the markdown plugin with our custom filter function...
  site.use(markdown, {filter: myCustomFilter})
  // ...and initiate the build process
  return site
})
```

All processed files are renamed to `<filename>.html` after being converted.

## Maintainers

- Frederic Marx <[marx.frederic@gmail.com](mailto:marx.frederic@gmail.com)>

## Code of Conduct

This repository operates under the [`weallbehave`](https://github.com/wealljs/weallbehave) Code of Conduct. Its contents can be found in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## License

MIT (see [LICENSE](LICENSE) document)