function matter (file, options, files) {
  const metadata = Object.assign({}, file.metadata, options.metadata)
  const newFile = Object.assign(file, { metadata })

  return newFile
}

module.exports = matter
