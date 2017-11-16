const test = require('ava')
const awoo = require('awoo')
const matter = require('../index')

test('correctly parses', async t => {
  const files = [
    {
      contents: '---\na: b\n---\n\ntest!'
    }
  ]

  const res = await awoo.integration(async site => {
    site.use(matter)
    return site
  }, files)

  t.deepEqual(res.files[0].metadata, {a: 'b'})
})
