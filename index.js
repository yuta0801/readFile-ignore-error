const fs = require('fs')

module.exports = (path, options, callback) => {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }
  fs.readFile(path, options, (err, data) => {
    if (err) callback()
    else callback(data)
  })
}

module.exports.callback = module.exports.default = module.exports

module.exports.promise = (path, options = {}) => {
  return new Promise(resolve => {
    fs.readFile(path, options, (err, data) => {
      if (err) resolve()
      else resolve(data)
    })
  })
}

module.exports.sync = (path, options = {}) => {
  try {
    return fs.readFileSync(path, options)
  } catch (e) {
    return undefined
  }
}
