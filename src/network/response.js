const StatusCode = require('./status-code')

class Response {
  static success (h, code, data, message) {
    if (code === StatusCode?.NO_CONTENT) { // No-content response
      return h.response().code(code)
    }

    return h.response({
      data,
      code,
      message
    }).code(code || StatusCode?.OK)
  }

  static error (h, code, errors) {
    return h.response({
      data: null,
      code,
      errors
    }).code(code || StatusCode?.SERVER_ERROR)
  }
}

module.exports = Response
