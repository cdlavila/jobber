const StatusCode = require('../helpers/status-code')
const Response = require('../helpers/response')
const Token = require('../helpers/token')

const adminAuthentication = {
  name: 'admin-authentication',
  version: '1.0.0',
  register: async (server) => {
    server.auth.scheme('jwt-admin', (server) => {
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
            // Verify role
            if (payload?.role !== 'Admin') {
              return Response.error(h, StatusCode?.PERMISSION_DENIED, 'User has not permissions for this action').takeover()
            }
            return h.authenticated({ credentials: { token: token, user: payload } })
          } catch (e) {
            return Response.error(h, StatusCode?.NOT_AUTHORIZED, e?.message?.replace('jwt', 'Token')).takeover()
          }
        }
      }
    })
    server.auth.strategy('admin-authentication', 'jwt-admin')
  }
}

module.exports = adminAuthentication
