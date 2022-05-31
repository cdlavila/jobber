const CompanyModel = require('../models/company-model')

class CompanyRepository {
  static async create (company) {
    const createdCompany = new CompanyModel(company)
    await createdCompany.save()
    return createdCompany
  }

  static async getAll () {
    return CompanyModel.find()
  }

  static async getById (id) {
    return CompanyModel.findById(id)
  }

  static async update (id, company) {
    const foundCompany = await CompanyModel.findById(id)
    const columns = Object.keys(company)
    columns.forEach(column => {
      foundCompany[column] = company[column]
    })
    foundCompany.save()
    return foundCompany
  }

  static async delete (id) {
    return CompanyModel.deleteOne({
      _id: id
    })
  }
}

module.exports = CompanyRepository
