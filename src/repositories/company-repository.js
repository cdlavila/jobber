const CompanyModel = require('../models/company-model')
const Repository = require('./repository')

class CompanyRepository extends Repository {
  constructor () {
    super()
    this.Model = CompanyModel
  }
}

module.exports = CompanyRepository
