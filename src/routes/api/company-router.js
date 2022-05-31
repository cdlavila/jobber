const CompanyController = require('../../controllers/company-controller')

module.exports = {
  path: 'companies',
  routes: [
    {
      method: 'POST',
      path: '',
      handler: CompanyController.create
    },
    {
      method: 'GET',
      path: '',
      handler: CompanyController.getAll
    },
    {
      method: 'GET',
      path: '/{id}',
      handler: CompanyController.getById
    },
    {
      method: 'PUT',
      path: '/{id}',
      handler: CompanyController.update
    },
    {
      method: 'DELETE',
      path: '/{id}',
      handler: CompanyController.delete
    }
  ]
}
