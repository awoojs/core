const grayMatter = require('gray-matter')
const isEmptyObject = require('is-empty-object')

function matter (file, options, files) {
  const grayMatterOutput = grayMatter(file.contents, options)
  const metadata = Object.assign({}, file.metadata, grayMatterOutput.data)

  const newFile = isEmptyObject(grayMatterOutput.data)
    ? file
    : Object.assign(file, {
      contents: grayMatterOutput.content,
      metadata
    })

  return newFile
}

module.exports = matter
