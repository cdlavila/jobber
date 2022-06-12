const StatusCode = require('../network/status-code')
const Response = require('../network/response')
const CompanyRepository = require('../repositories/company-repository')

class CompanyController {
  static async create (request, h) {
    try {
      const companyRepository = new CompanyRepository()
      const company = await companyRepository.create(request?.payload)
      return Response.success(h, StatusCode?.CREATED, company, 'Company created successfully')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async getAll (request, h) {
    try {
      const companyRepository = new CompanyRepository()
      const companies = await companyRepository.getAll()
      return Response.success(h, StatusCode?.OK, companies, 'Companies list')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async getById (request, h) {
    try {
      const companyRepository = new CompanyRepository()
      const company = await companyRepository.getById(request?.params?.id)
      if (!company) { return Response.error(h, StatusCode?.NOT_FOUND, 'Company not found') }
      return Response.success(h, StatusCode?.OK, company, `Company of id ${request?.params?.id}`)
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async update (request, h) {
    try {
      const companyRepository = new CompanyRepository()
      if (!request?.params?.id) { return Response.error(h, StatusCode?.BAD_REQUEST, 'Company id is required') }
      const company = await companyRepository.update(request?.params?.id, request?.payload)
      return Response.success(h, StatusCode?.OK, company, 'Company updated successfully')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async delete (request, h) {
    try {
      const companyRepository = new CompanyRepository()
      await companyRepository.delete(request?.params?.id)
      return Response.success(h, StatusCode?.NO_CONTENT)
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }
}

module.exports = CompanyController
