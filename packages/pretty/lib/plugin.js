const defaultFilter = require('./filter')

function plugin (options = {}) {
  const filter = options.filter || defaultFilter

  return files => {
    return files.map(file => {
      return filter(file, options, files) && file.path.endsWith('.html')
        ? transform(file, options, files)
        : file
    })
  }
}

function transform (file, options, files) {
  file.path = `${file.dirname}/${file.stem}/index.html`
  return file
}

module.exports = plugin
