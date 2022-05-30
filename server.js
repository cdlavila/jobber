const Hapi = require('@hapi/hapi')
const database = require('./src/database')
const routes = require('./src/routes/index')
require('dotenv').config()

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost'
  })

  server.route(routes)
  await server.start()
  console.log('Server running on %s', server.info.uri)
  await database.connect()
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
