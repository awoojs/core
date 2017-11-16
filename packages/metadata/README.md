<h1 align="center">
  awoo-metadata
</h1>

<p align="center">
  A custom metadata plugin for the <a href="https://github.com/awoojs/awoo">awoo static site generator</a>
</p>

<p align="center">
  <!-- npm version -->
  <a href="https://npmjs.org/package/awoo-metadata">
    <img src="https://img.shields.io/npm/v/awoo-metadata.svg?style=flat-square"
      alt="npm version" />
  </a>
  <!-- code style -->
  <a href="https://github.com/feross/standard"><img src="https://img.shields.io/badge/code%20style-standard-blue.svg?style=flat-square"
  alt="code style: standard"></a>
</p>

## Features

- **Add custom metadata** to files within the [awoo](https://github.com/awoojs/awoo) `files` array
- **Custom filter functions** to include or exclude files from transforms

## Installation

```sh
npm install --save awoo-metadata
```

## Usage example

```js
const awoo = require('awoo')
const metadata = require('awoo-metadata')

// metadata object
// a JavaScript object that you want to apply to files in the awoo array
const myMetaData = {
  name: 'My awesome website'
}

// enter our main function:
// the main function should be an async function so that
// it automatically returns a promise
awoo(async site => {
  // we register our plugin...
  site.use(metadata, {metadata: myMetaData})
  // ...and initiate the build process
  return site
})
```

## Filter example

You can pass a custom filter as an option to `metadata` to include or exclude files.

A filter is a function that takes the arguments `file`, `options`, and `files`. `file` is the current file, `options` is the options object passed to `metadata`, and `files` is the entire array of files created by `awoo`.

When the filter function returns `true`, `metadata` applies its transforms to the current `file` object. Otherwise the `file` object remains unchanged.

The default filter in `metadata` always returns true, so the transform will be applied to every file:

```js
function filter (file, options, files) {
  return true
}
```

This is how you could use a filter to only apply `metadata` to files ending with `.md`:

```js
const awoo = require('awoo')
const metadata = require('awoo-metadata')

// metadata object
// a JavaScript object that you want to each to files in the awoo array
const myMetaData = {
  name: 'My awesome website'
}

// custom filter function
// returns true if file path ends with '.md'
function myCustomFilter (file, options, files) {
  return file.path.endsWith('.md')
}

awoo(async site => {
  // we register the metadata plugin with our custom filter function...
  site.use(metadata, {
    metadata: myMetaData,
    filter: myCustomFilter
  })
  // ...and initiate the build process
  return site
})
```

## How does it work?

`metadata` takes any JavaScript object and writes it to the `metadata` property of files in the `awoo` array.

## Maintainers

- Frederic Marx <[marx.frederic@gmail.com](mailto:marx.frederic@gmail.com)>

## Code of Conduct

This repository operates under the [`weallbehave`](https://github.com/wealljs/weallbehave) Code of Conduct. Its contents can be found in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## License

MIT (see [LICENSE](LICENSE) document)
