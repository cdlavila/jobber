const ApplicationController = require('../../controllers/application-controller')

module.exports = {
  path: 'applications',
  routes: [
    {
      method: 'POST',
      path: '',
      options: {
        auth: 'candidate-authentication'
      },
      handler: ApplicationController.create
    },
    {
      method: 'GET',
      path: '',
      options: {
        auth: 'admin-authentication'
      },
      handler: ApplicationController.getAll
    },
    {
      method: 'GET',
      path: '/by-job/{job}',
      options: {
        auth: 'admin-authentication'
      },
      handler: ApplicationController.getAllByJob
    },
    {
      method: 'GET',
      path: '/{id}',
      options: {
        auth: 'authentication'
      },
      handler: ApplicationController.getById
    },
    {
      method: 'PUT',
      path: '/{id}',
      options: {
        auth: 'admin-authentication'
      },
      handler: ApplicationController.update
    },
    {
      method: 'DELETE',
      path: '/{id}',
      options: {
        auth: 'admin-authentication'
      },
      handler: ApplicationController.delete
    }
  ]
}
