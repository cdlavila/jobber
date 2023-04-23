const CompanyController = require('../../controllers/company-controller')

module.exports = [
  {
    method: 'POST',
    path: `/api/${process.env.API_VERSION}/companies`,
    options: {
      auth: 'admin-authentication'
    },
    handler: CompanyController.create
  },
  {
    method: 'GET',
    path: `/api/${process.env.API_VERSION}/companies`,
    options: {
      auth: 'authentication',
    },
    handler: CompanyController.getAll
  },
  {
    method: 'GET',
    path: `/api/${process.env.API_VERSION}/{id}`,
    options: {
      auth: 'authentication'
    },
    handler: CompanyController.getById
  },
  {
    method: 'PATCH',
    path: `/api/${process.env.API_VERSION}/companies/{id}`,
    options: {
      auth: 'admin-authentication'
    },
    handler: CompanyController.update
  },
  {
    method: 'DELETE',
    path: `/api/${process.env.API_VERSION}/companies/{id}`,
    options: {
      auth: 'admin-authentication'
    },
    handler: CompanyController.delete
  }
]
