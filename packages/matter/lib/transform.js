const grayMatter = require('gray-matter')
const isEmptyObject = require('is-empty-object')

function matter (file, options, files) {
  const grayMatterOutput = grayMatter(file.contents, options)

  const newFile = isEmptyObject(grayMatterOutput.data)
    ? file
    : Object.assign(file, {
      contents: grayMatterOutput.content,
      metadata: grayMatterOutput.data
    })

  return newFile
}

module.exports = matter
