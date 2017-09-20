function filter (file, options, files) {
  return file.path.endsWith('.html')
}

module.exports = filter
