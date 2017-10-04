const test = require('ava')
const weh = require('@weh/weh')
const vfile = require('vfile')
const plugin = require('../lib/plugin')

test('pretty plugin works', async t => {
  const files = [
    vfile({
      path: 'cool.html',
      contents: 'hi'
    }),
    vfile({
      path: 'subdir/cooler.html',
      contents: 'hello'
    })
  ]

  const res = await weh.integration(async site => {
    site.use(plugin)
    return site
  }, files)

  t.is(res.files.find(f => f.contents === 'hi').basename, 'index.html')
  t.is(res.files.find(f => f.contents === 'hello').dirname, 'subdir/cooler')
})

test('pretty plugin excludes index.html', async t => {
  const files = [
    vfile({
      path: 'index.html',
      contents: 'a'
    }),
    vfile({
      path: 'subdir/index.html',
      contents: 'b'
    })
  ]

  const res = await weh.integration(async site => {
    site.use(plugin)
    return site
  }, files)

  t.is(res.files.find(f => f.contents === 'a').path, 'index.html')
  t.is(res.files.find(f => f.contents === 'b').path, 'subdir/index.html')
})
