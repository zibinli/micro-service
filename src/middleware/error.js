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
    error.msg = message
    return error
  }

  static badRequest (message, data, code, statusCode = 400) {
    let error = Boom.internal(message, data, statusCode)
    error.code = code
    error.msg = message
    return error
  }

  static unauthorized (message, data, code, statusCode = 401) {
    let error = Boom.internal(message, data, statusCode)
    error.code = code
    error.msg = message
    return error
  }

  static forbidden (message, data, code, statusCode = 403) {
    let error = Boom.internal(message, data, statusCode)
    error.code = code
    error.msg = message
    return error
  }
}
