const test = require('ava')
const transform = require('../lib/transform')

test('does nothing if there is no front matter', t => {
  const input = {
    contents: 'Hello'
  }

  const expected = {
    contents: 'Hello'
  }

  t.deepEqual(transform(input), expected)
})

test('parses front matter', t => {
  const input = {
    contents: '---\nworks: true\n---\nHello'
  }

  const expected = {
    contents: 'Hello',
    metadata: {
      works: true
    }
  }

  t.deepEqual(transform(input), expected)
})

test('accepts options', t => {
  const input = {
    contents: '~~~\nworks: true\n~~~\nHello'
  }

  const options = {
    delims: '~~~'
  }

  const expected = {
    contents: 'Hello',
    metadata: {
      works: true
    }
  }

  t.deepEqual(transform(input, options), expected)
})
