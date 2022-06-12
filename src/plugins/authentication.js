const StatusCode = require('../helpers/status-code')
const Response = require('../helpers/response')
const Token = require('../helpers/token')

const authentication = {
  name: 'authentication',
  version: '1.0.0',
  register: async (server) => {
    server.auth.scheme('jwt', (server) => {
      return {
        authenticate: async (request, h) => {
          try {
            // Validate that token was sent
            if (!request?.headers?.authorization) {
              return Response.error(h, StatusCode?.NOT_AUTHORIZED, 'Token is required').takeover()
            }
            // Validate token structure
            const bearer = request?.headers?.authorization.split(' ')[0]
            if (bearer !== 'Bearer') {
              return Response.error(h, StatusCode?.NOT_AUTHORIZED, 'Token structure is invalid').takeover()
            }
            // Verify token
            const token = request?.headers?.authorization.split(' ')[1]
            const payload = Token.verify(token, process.env.TOKEN_SECRET_KEY)
            return h.authenticated({ credentials: { token, user: payload } })
          } catch (e) {
            return Response.error(h, StatusCode?.NOT_AUTHORIZED, e?.message?.replace('jwt', 'Token')).takeover()
          }
        }
      }
    })
    server.auth.strategy('authentication', 'jwt')
  }
}

module.exports = authentication
