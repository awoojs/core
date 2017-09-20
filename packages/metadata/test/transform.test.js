const test = require('ava')
const transform = require('../lib/transform')

test('adds metadata to file', t => {
  const input = {}

  const metadata = {
    works: true
  }

  const expected = {
    metadata: {
      works: true
    }
  }

  t.deepEqual(transform(input, { metadata }), expected)
})

test('preserves existing metadata', t => {
  const input = {
    metadata: {
      doNotDeleteMe: true
    }
  }

  const metadata = {
    works: true
  }

  const expected = {
    metadata: {
      doNotDeleteMe: true,
      works: true
    }
  }

  t.deepEqual(transform(input, { metadata }), expected)
})
