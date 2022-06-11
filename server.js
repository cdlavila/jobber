const Hapi = require('@hapi/hapi')
const mongoosePlugin = require('./src/plugins/mongoose')
const routes = require('./src/routes/index')
require('dotenv').config()

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost'
  })

  await server.register(mongoosePlugin)
  server.route(routes)
  server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
