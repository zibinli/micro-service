const Boom = require('boom')

module.exports = class MyError {
  static tooManyRequests (message, data, code) {
    let error = Boom.tooManyRequests(message, data)
    error.code = code
    return error
  }

  static internal (message, data, code, statusCode = 500) {
    let error = Boom.internal(message, data, statusCode)
    error.code = code
    return error
  }
}
