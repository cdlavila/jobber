require('dotenv').config()
const Hapi = require('@hapi/hapi')
const mongoosePlugin = require('./src/plugins/mongoose')
const authenticationPlugin = require('./src/plugins/authentication')
const adminAuthenticationPlugin = require('./src/plugins/admin-authentication')
const candidateAuthenticationPlugin = require('./src/plugins/candidate-authentication')
const routes = require('./src/routes/index')

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost'
  })

  await server.register(mongoosePlugin)
  await server.register(authenticationPlugin)
  await server.register(adminAuthenticationPlugin)
  await server.register(candidateAuthenticationPlugin)
  server.route(routes)
  server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
