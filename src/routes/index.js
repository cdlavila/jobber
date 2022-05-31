require('dotenv').config()
const { path: CompanyPath, routes: CompanyRoutes } = require('./api/company-router')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return h.response({ message: 'Welcome to the Companies server' }).code(200)
    }
  },
  {
    method: 'GET',
    path: `/api/${process.env.API_VERSION}`,
    handler: (request, h) => {
      return h.response({ message: `Welcome to the Companies API ${process.env.API_VERSION}` }).code(200)
    }
  },
  ...CompanyRoutes.map((route) => {
    return { ...route, path: `/api/${process.env.API_VERSION}/${CompanyPath}${route.path}` }
  })
]
