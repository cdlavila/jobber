const JobController = require('../../controllers/job-controller')

module.exports = {
  path: 'jobs',
  routes: [
    {
      method: 'POST',
      path: '',
      options: {
        auth: 'admin-authentication'
      },
      handler: JobController.create
    },
    {
      method: 'GET',
      path: '',
      options: {
        auth: 'authentication'
      },
      handler: JobController.getAll
    },
    {
      method: 'GET',
      path: '/by-company/{company}',
      options: {
        auth: 'authentication'
      },
      handler: JobController.getAllByCompany
    },
    {
      method: 'GET',
      path: '/{id}',
      options: {
        auth: 'authentication'
      },
      handler: JobController.getById
    },
    {
      method: 'PUT',
      path: '/{id}',
      options: {
        auth: 'admin-authentication'
      },
      handler: JobController.update
    },
    {
      method: 'DELETE',
      path: '/{id}',
      options: {
        auth: 'admin-authentication'
      },
      handler: JobController.delete
    }
  ]
}
