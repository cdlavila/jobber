const ApplicationController = require('../../controllers/application-controller')

module.exports = [
  {
    method: 'POST',
    path: `/api/${process.env.API_VERSION}/applications`,
    options: {
      auth: 'candidate-authentication'
    },
    handler: ApplicationController.create
  },
  {
    method: 'GET',
    path: `/api/${process.env.API_VERSION}/applications`,
    options: {
      auth: 'admin-authentication'
    },
    handler: ApplicationController.getAll
  },
  {
    method: 'GET',
    path: `/api/${process.env.API_VERSION}/applications/by-job/{job}`,
    options: {
      auth: 'admin-authentication'
    },
    handler: ApplicationController.getAllByJob
  },
  {
    method: 'GET',
    path: `/api/${process.env.API_VERSION}/applications/{id}`,
    options: {
      auth: 'authentication'
    },
    handler: ApplicationController.getById
  },
  {
    method: 'PATCH',
    path: `/api/${process.env.API_VERSION}/applications/{id}`,
    options: {
      auth: 'admin-authentication'
    },
    handler: ApplicationController.update
  },
  {
    method: 'DELETE',
    path: `/api/${process.env.API_VERSION}/applications/{id}`,
    options: {
      auth: 'admin-authentication'
    },
    handler: ApplicationController.delete
  }
]
