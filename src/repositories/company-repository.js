const CompanyModel = require('../models/company-model')
const Repository = require('./repository')

class CompanyRepository extends Repository {
  constructor () {
    super()
    this.model = CompanyModel
    this.name = 'Company'
  }
}

module.exports = CompanyRepository
