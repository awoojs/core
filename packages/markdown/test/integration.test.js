const test = require('ava')
const weh = require('@weh/weh')
const markdown = require('../index')

test('correctly parses', async t => {
  const files = [
    {
      path: 'test.md',
      contents: '# hello'
    }
  ]

  const res = await weh.integration(async site => {
    site.use(markdown)
    return site
  }, files)

  t.is(res.files[0].contents, '<h1>hello</h1>\n')
  t.is(res.files[0].path, 'test.html')
})
