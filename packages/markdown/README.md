<div align="center">
<h1>
  awoo-markdown
</h1>

<p>
  A Markdown parsing plugin for the <a href="https://github.com/awoojs/awoo">awoo static site generator</a>
</p>

<p>
  <!-- npm version -->
  <a href="https://npmjs.org/package/awoo-markdown">
    <img src="https://img.shields.io/npm/v/awoo-markdown.svg?style=flat-square"
      alt="npm version" />
  </a>
  <!-- code style -->
  <a href="https://github.com/feross/standard"><img src="https://img.shields.io/badge/code%20style-standard-blue.svg?style=flat-square"
  alt="code style: standard"></a>
</p>
</div>

## Features

- **Parse Markdown content** in text files within the [awoo](https://github.com/awoojs/awoo) `files` array
- **Custom filter functions** to include or exclude files from transforms

## Installation

```sh
npm install --save awoo-markdown
```

## Usage example

```js
const awoo = require('awoo')
const markdown = require('awoo-markdown')

// enter our main function:
// the main function should be an async function so that
// it automatically returns a promise
awoo(async site => {
  // we register our plugin...
  site.use(markdown)
  // ...and initiate the build process
  return site
})
```

## Filter example

You can pass a custom filter as an option to `markdown` to include or exclude files.

A filter is a function that takes the arguments `file`, `options`, and `files`. `file` is the current file, `options` is the options object passed to `markdown`, and `files` is the entire array of files created by `awoo`.

If the filter function returns `true`, `markdown` applies its transforms to the contents of the current `file` object. Otherwise the `file` object remains unchanged.

The default filter in `markdown` returns true only for files ending with `.md`:

```js
function myCustomFilter (file, options, files) {
  return file.path.endsWith('.md')
}
```

This is how you could use a filter to apply `markdown` to every file:

```js
const awoo = require('awoo')
const markdown = require('awoo-markdown')

// custom filter function
// always returns true
function myCustomFilter (file, options, files) {
  return true
}

awoo(async site => {
  // we register the markdown plugin with our custom filter function...
  site.use(markdown, {filter: myCustomFilter})
  // ...and initiate the build process
  return site
})
```

## Markdown-it plugin example

You can pass plugins as an option to `markdown` to use [markdown-it plugin](https://github.com/markdown-it/markdown-it#plugins-load).

plugins is an array that contains every `plugin`.

`plugin` is also an array that takes one or more arguments,
the first argument is the markdown-it plugin, and the following arguments
is the custom options that the markdown-it plugin takes itself.

```js
const awoo = require('awoo')
const markdown = require('awoo-markdown')
const markdownItContainer = require('markdown-it-container')

awoo(async site => {
  // we register the markdown plugin with its own plugins...
  site.use(markdown, {plugins: [
    [markdownItContainer, 'spoiler']
  ]})
  // ...and initiate the build process
  return site
})

```

All processed files are renamed to `<filename>.html` after being converted.

## Maintainers

- Frederic Marx <[marx.frederic@gmail.com](mailto:marx.frederic@gmail.com)>

## License

MIT (see [LICENSE](LICENSE) document)
