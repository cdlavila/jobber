require('dotenv').config()
const CompanyRouters = require('./api/company-router')
const JobRouters = require('./api/job-router')
const UserRouters = require('./api/user-router')
const ApplicationRouters = require('./api/application-router')

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
  ...CompanyRouters,
  ...JobRouters,
  ...UserRouters,
  ...ApplicationRouters
]
