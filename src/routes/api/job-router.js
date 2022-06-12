const JobController = require('../../controllers/job-controller')

module.exports = {
  path: 'jobs',
  routes: [
    {
      method: 'POST',
      path: '',
      handler: JobController.create
    },
    {
      method: 'GET',
      path: '',
      handler: JobController.getAll
    },
    {
      method: 'GET',
      path: '/by-company/{company}',
      handler: JobController.getAllByCompany
    },
    {
      method: 'GET',
      path: '/{id}',
      handler: JobController.getById
    },
    {
      method: 'PUT',
      path: '/{id}',
      handler: JobController.update
    },
    {
      method: 'DELETE',
      path: '/{id}',
      handler: JobController.delete
    }
  ]
}
