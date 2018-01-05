const test = require('ava')
const endent = require('endent')
const transform = require('../lib/transform')
const markdownItContainer = require('markdown-it-container')

test('parses markdown', t => {
  const input = {
    path: 'test.md',
    contents: '# Hello'
  }

  const expected = {
    path: 'test.html',
    contents: '<h1>Hello</h1>\n'
  }

  t.deepEqual(transform(input), expected)
})

test('parses markdown with markdown-it plugin', t => {
  const input = {
    path: 'test.md',
    contents: endent`
      ::: spoiler
       123
      :::
    `
  }

  const expected = {
    path: 'test.html',
    contents: '<div class="spoiler">\n<p>123</p>\n</div>\n'
  }

  t.deepEqual(transform(input, {
    plugins: [
      [markdownItContainer, 'spoiler']
    ]
  }), expected)
})
