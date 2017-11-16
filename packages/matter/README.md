<h1 align="center">
  awoo-matter
</h1>

<p align="center">
  A front matter parsing plugin for the <a href="https://github.com/awoojs/awoo">awoo static site generator</a>
</p>

<p align="center">
  <!-- npm version -->
  <a href="https://npmjs.org/package/awoo-matter">
    <img src="https://img.shields.io/npm/v/awoo-matter.svg?style=flat-square"
      alt="npm version" />
  </a>
  <!-- code style -->
  <a href="https://github.com/feross/standard"><img src="https://img.shields.io/badge/code%20style-standard-blue.svg?style=flat-square"
  alt="code style: standard"></a>
</p>

## Features

- **Extract YAML metadata** _(Front Matter)_ from text files within the [awoo](https://github.com/awoojs/awoo) `files` array
- **Custom filter functions** to include or exclude files from transforms

## Installation

```sh
npm install --save awoo-matter
```

## Usage example

```js
const awoo = require('awoo')
const matter = require('awoo-matter')

// enter our main function:
// the main function should be an async function so that
// it automatically returns a promise
awoo(async site => {
  // we register our plugin...
  site.use(matter)
  // ...and initiate the build process
  return site
})
```

## Filter example

You can pass a custom filter as an option to `matter` to include or exclude files.

A filter is a function that takes the arguments `file`, `options`, and `files`. `file` is the current file, `options` is the options object passed to `matter`, and `files` is the entire array of files created by `awoo`.

When the filter function returns `true`, `matter` applies its transforms to the current `file` object. Otherwise the `file` object remains unchanged.

The default filter in `matter` always returns true, so the transform will be applied to every file:

```js
function filter (file, options, files) {
  return true
}
```

This is how you could use a filter to only apply `matter` to files ending with `.md`:

```js
const awoo = require('awoo')
const matter = require('awoo-matter')

// custom filter function
// returns true if file path ends with '.md'
function myCustomFilter (file, options, files) {
  return file.path.endsWith('.md')
}

awoo(async site => {
  // we register the matter plugin with our custom filter function...
  site.use(matter, {filter: myCustomFilter})
  // ...and initiate the build process
  return site
})
```

## Options Example

`matter` uses `[gray-matter](http://npm.im/gray-matter)` for parsing metadata. All options of `gray-matter` are also available in `matter`.

This is what a plugin call with custom options would look like:

```js
const awoo = require('awoo')
const matter = require('awoo-matter')

// we define our options object...
const myMatterOptions = {
  delims: '~~~'
}

awoo(async site => {
  // ...and pass it to the use method
  site.use(matter, myMatterOptions)
  return site
})
```

## How does it work?

`matter` extracts any Front Matter from the `contents` property of a `file` object and writes it to its `metadata` property.

Given the following text file:

```
---
title: Greeting
---
Hello World
```

The resulting awoo `file` object would be:

```js
contents: 'Hello World',
metadata: {
  title: 'Greeting'
}
```

## Maintainers

- Frederic Marx <[marx.frederic@gmail.com](mailto:marx.frederic@gmail.com)>

## Code of Conduct

This repository operates under the [`weallbehave`](https://github.com/wealljs/weallbehave) Code of Conduct. Its contents can be found in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## License

MIT (see [LICENSE](LICENSE) document)
