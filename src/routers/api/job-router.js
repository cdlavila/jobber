const JobController = require('../../controllers/job-controller')

module.exports = [
  {
    method: 'POST',
    path: `/api/${process.env.API_VERSION}/jobs`,
    options: {
      auth: 'admin-authentication'
    },
    handler: JobController.create
  },
  {
    method: 'GET',
    path: `/api/${process.env.API_VERSION}/jobs`,
    options: {
      auth: 'authentication'
    },
    handler: JobController.getAll
  },
  {
    method: 'GET',
    path: `/api/${process.env.API_VERSION}/jobs/by-company/{company}`,
    options: {
      auth: 'authentication'
    },
    handler: JobController.getAllByCompany
  },
  {
    method: 'GET',
    path: `/api/${process.env.API_VERSION}/jobs/{id}`,
    options: {
      auth: 'authentication'
    },
    handler: JobController.getById
  },
  {
    method: 'PATCH',
    path: `/api/${process.env.API_VERSION}/jobs/{id}`,
    options: {
      auth: 'admin-authentication'
    },
    handler: JobController.update
  },
  {
    method: 'DELETE',
    path: `/api/${process.env.API_VERSION}/jobs/{id}`,
    options: {
      auth: 'admin-authentication'
    },
    handler: JobController.delete
  }
]
