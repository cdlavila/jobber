// const CompanyController = require('../../controllers/company-controller')

module.exports = {
  path: 'companies',
  routes: [{
    method: 'GET',
    path: '',
    // handler: CompanyController.getAll
    handler: (request, h) => {
      return 'get all companies'
    }
  }]
}
