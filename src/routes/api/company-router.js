const CompanyController = require('../../controllers/company-controller')

module.exports = {
  path: 'companies',
  routes: [
    {
      method: 'POST',
      path: '',
      options: {
        auth: 'admin-authentication'
      },
      handler: CompanyController.create
    },
    {
      method: 'GET',
      path: '',
      options: {
        auth: 'authentication'
      },
      handler: CompanyController.getAll
    },
    {
      method: 'GET',
      path: '/{id}',
      options: {
        auth: 'authentication'
      },
      handler: CompanyController.getById
    },
    {
      method: 'PUT',
      path: '/{id}',
      options: {
        auth: 'admin-authentication'
      },
      handler: CompanyController.update
    },
    {
      method: 'DELETE',
      path: '/{id}',
      options: {
        auth: 'admin-authentication'
      },
      handler: CompanyController.delete
    }
  ]
}
