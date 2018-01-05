const test = require('ava')
const awoo = require('awoo')
const endent = require('endent')
const markdown = require('../index')
const markdownItContainer = require('markdown-it-container')

test('correctly parses', async t => {
  const files = [
    {
      path: 'test.md',
      contents: '# hello'
    }
  ]

  const res = await awoo.integration(async site => {
    site.use(markdown)
    return site
  }, files)

  t.is(res.files[0].contents, '<h1>hello</h1>\n')
  t.is(res.files[0].path, 'test.html')
})

test('correctly parses with markdown-it plugin', async t => {
  const files = [
    {
      path: 'test.md',
      contents: endent`
        ::: spoiler
         123
        :::
      `
    }
  ]

  const res = await awoo.integration(async site => {
    site.use(markdown, {
      plugins: [
        [markdownItContainer, 'spoiler']
      ]
    })
    return site
  }, files)

  t.is(res.files[0].contents, '<div class="spoiler">\n<p>123</p>\n</div>\n')
  t.is(res.files[0].path, 'test.html')
})
