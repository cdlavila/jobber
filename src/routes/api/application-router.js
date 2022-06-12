const ApplicationController = require('../../controllers/application-controller')

module.exports = {
  path: 'applications',
  routes: [
    {
      method: 'POST',
      path: '',
      handler: ApplicationController.create
    },
    {
      method: 'GET',
      path: '/by-job/{job}',
      handler: ApplicationController.getAllByJob
    },
    {
      method: 'GET',
      path: '/{id}',
      handler: ApplicationController.getById
    },
    {
      method: 'PUT',
      path: '/{id}',
      handler: ApplicationController.update
    },
    {
      method: 'DELETE',
      path: '/{id}',
      handler: ApplicationController.delete
    }
  ]
}
