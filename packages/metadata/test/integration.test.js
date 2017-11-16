const test = require('ava')
const awoo = require('awoo')
const vfile = require('vfile')
const layouts = require('awoo-layouts')
const plugin = require('../lib/plugin')

test('metadata plugin works', async t => {
  const files = [
    vfile({
      path: 'test.html',
      metadata: {
        layout: 'layout'
      }
    })
  ]

  const myMetadata = {
    world: 'world'
  }

  const layout = (file, files) =>
  `<h1>hello ${file.metadata.world}</h1>`

  const res = await awoo.integration(async site => {
    site.use(plugin, { metadata: myMetadata })
    site.use(layouts, { layouts: { layout } })
    return site
  }, files)

  t.is(res.files.find(f => f.path === 'test.html').contents, '<h1>hello world</h1>')
})
