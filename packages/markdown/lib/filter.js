function filter (file, options, files) {
  return file.path.endsWith('.md')
}

module.exports = filter
