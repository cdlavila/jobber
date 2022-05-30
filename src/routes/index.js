require('dotenv').config()
const { path: CompanyPath, routes: CompanyRoutes } = require('./api/company-router')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Welcome to the Companies server'
    }
  },
  {
    method: 'GET',
    path: `/api/${process.env.API_VERSION}`,
    handler: (request, h) => {
      return `Welcome to the Companies API ${process.env.API_VERSION}`
    }
  },
  ...CompanyRoutes.map((route) => {
    return { ...route, path: `/api/${process.env.API_VERSION}/${CompanyPath}${route.path}` }
  })
]
