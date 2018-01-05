const md = require('markdown-it')()

function markdown (file, options, files) {
  if (options && options.plugins) {
    options.plugins.forEach(plugin => {
      md.use(...plugin)
    })
  }

  const markdownOutput = md.render(file.contents)
  const newFile = Object.assign(file, {
    path: file.path.replace(/\.[^]+$/i, '.html'),
    contents: markdownOutput
  })

  return newFile
}

module.exports = markdown
