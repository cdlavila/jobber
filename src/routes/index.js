require('dotenv').config()
const { path: CompanyPath, routes: CompanyRoutes } = require('./api/company-router')
const { path: JobPath, routes: JobRoutes } = require('./api/job-router')
const { path: UserPath, routes: UserRoutes } = require('./api/user-router')
const { path: ApplicationPath, routes: ApplicationRoutes } = require('./api/application-router')

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
  }),
  ...JobRoutes.map((route) => {
    return { ...route, path: `/api/${process.env.API_VERSION}/${JobPath}${route.path}` }
  }),
  ...UserRoutes.map((route) => {
    return { ...route, path: `/api/${process.env.API_VERSION}/${UserPath}${route.path}` }
  }),
  ...ApplicationRoutes.map((route) => {
    return { ...route, path: `/api/${process.env.API_VERSION}/${ApplicationPath}${route.path}` }
  })
]
