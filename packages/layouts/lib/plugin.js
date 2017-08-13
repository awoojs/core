const defaultFilter = require('./filter')

function plugin (options = {}) {
  const filter = options.filter || defaultFilter

  return files => {
    return files.map(file => {
      return filter(file, options, files)
        ? transform(file, options, files)
        : file
    })
  }
}

function applyTemplate (template, file, files) {
  return Object.assign(file, { contents: template(file, files) })
}

function transform (file, options, files) {
  return applyTemplate(options.layouts[file.metadata.layout || 'main'], file, files)
}

module.exports = plugin
