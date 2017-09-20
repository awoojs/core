const transform = require('./transform')
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

module.exports = plugin
