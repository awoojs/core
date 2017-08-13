const test = require('ava')
const transform = require('../lib/transform')

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
