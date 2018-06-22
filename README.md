<h1 align="center">
  core 
</h1>

<p align="center">
  officially supported awoo plugins<br>
</p>

<div align="center">
  <!-- test status -->
  <a href="https://travis-ci.org/awoojs/core">
    <img src="https://img.shields.io/travis/awoojs/core.svg?style=flat-square"
     alt="test status" />
  </a>
  <!-- code coverage -->
  <a href="https://codecov.io/gh/awoojs/core">
    <img src="https://img.shields.io/codecov/c/github/awoojs/core.svg?style=flat-square"
     alt="code coverage" />
  </a>
</div>

<br />

`core` is the collective repository of officially supported plugins for the
[awoo](http://npm.im/awoo) static site generator. All of the packages here
are safe and maintained.

## Packages

| Package | Version | Dependencies | Description |
| -------- | ------- | -------------- | ------------ |
| [`awoo-layouts`](/packages/layouts) | [![npm](https://img.shields.io/npm/v/awoo-layouts.svg?style=flat-square)](https://npm.im/awoo-layouts) | [![Dependency Status](https://david-dm.org/awoojs/core.svg?path=packages/layouts&style=flat-square)](https://david-dm.org/awoojs/core?path=packages/layouts) | reusable html templates |
| [`awoo-markdown`](/packages/markdown) | [![npm](https://img.shields.io/npm/v/awoo-markdown.svg?style=flat-square)](https://npm.im/awoo-markdown) | [![Dependency Status](https://david-dm.org/awoojs/core.svg?path=packages/markdown&style=flat-square)](https://david-dm.org/awoojs/core?path=packages/markdown) | markdown parsing |
| [`awoo-matter`](/packages/matter) | [![npm](https://img.shields.io/npm/v/awoo-matter.svg?style=flat-square)](https://npm.im/awoo-matter) | [![Dependency Status](https://david-dm.org/awoojs/core.svg?path=packages/matter&style=flat-square)](https://david-dm.org/awoojs/core?path=packages/matter) | frontmatter parsing |
| [`awoo-metadata`](/packages/metadata) | [![npm](https://img.shields.io/npm/v/awoo-metadata.svg?style=flat-square)](https://npm.im/awoo-metadata) | [![Dependency Status](https://david-dm.org/awoojs/core.svg?path=packages/metadata&style=flat-square)](https://david-dm.org/awoojs/core?path=packages/metadata) | custom metadata |
| [`awoo-pretty`](/packages/pretty) | [![npm](https://img.shields.io/npm/v/awoo-pretty.svg?style=flat-square)](https://npm.im/awoo-pretty) | [![Dependency Status](https://david-dm.org/awoojs/core.svg?path=packages/pretty&style=flat-square)](https://david-dm.org/awoojs/core?path=packages/pretty) | pretty links            |

## Development

To work on `core`, just clone the repository, install the npm dependencies, and
bootstrap the lerna stuff. Like this:

```sh
git clone https://github.com/awoojs/core.git awoo-core
cd awoo-core
npm install
npx lerna bootstrap
```

If you're implementing a new plugin, you can pull inspiration from the other
ones (making a plugin template is still on our TODO list, sadly). Just open
a pull request and we'll help you out!

## Team

- Olivia Hugger <[olivia@fastmail.com](mailto:olivia@fastmail.com)>
- Frederic Marx <[marx.frederic@gmail.com](mailto:marx.frederic@gmail.com)>

## Code of Conduct

This repository operates under the [`weallbehave`](https://github.com/wealljs/weallbehave) Code of Conduct. Its contents can be found in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## License

[MIT](/LICENSE)
