const StatusCode = require('../network/status-code')
const Response = require('../network/response')
const Token = require('../network/token')

const checkAuthentication = {
  name: 'check-authentication',
  version: '1.0.0',
  register: async (server) => {
    server.auth.scheme('jsonwebtoken', (server) => {
      return {
        authenticate: async (request, h) => {
          // Verify token
          const token = request?.headers?.authorization.split(' ')[1]
          const payload = Token.verify(token, process.env.TOKEN_SECRET_KEY)
          return h.authenticated({credentials: { token: token, user: payload }})
        }
      }
    })
    server.auth.strategy('authentication', 'jsonwebtoken')
  }
}

module.exports = checkAuthentication
