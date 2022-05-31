const StatusCode = require('../network/status-code')
const Response = require('../network/response')
const CompanyRepository = require('../repositories/company-repository')

class CompanyController {
  static async create (request, h) {
    try {
      console.log(request?.payload)
      const company = await CompanyRepository.create(request?.payload)
      return Response.success(h, StatusCode?.CREATED, company, 'Company created successfully')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async getAll (request, h) {
    try {
      const companies = await CompanyRepository.getAll()
      return Response.success(h, StatusCode?.OK, companies, 'Companies list')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async getById (request, h) {
    try {
      const company = await CompanyRepository.getById(request?.params?.id)
      if (!company) { return Response.error(h, StatusCode?.NOT_FOUND, 'Company not found') }
      return Response.success(h, StatusCode?.OK, company, `Company of id ${request?.params?.id}`)
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async update (request, h) {
    try {
      if (!request?.params?.id) { return Response.error(h, StatusCode?.BAD_REQUEST, 'Company id is required') }
      const company = await CompanyRepository.update(request?.params?.id, request?.payload)
      return Response.success(h, StatusCode?.OK, company, 'Company updated successfully')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async delete (request, h) {
    try {
      if (!request?.params?.id) { return Response.error(h, StatusCode?.BAD_REQUEST, 'Company id is required') }
      await CompanyRepository.delete(request?.params?.id)
      return Response.success(h, StatusCode?.NO_CONTENT)
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }
}

module.exports = CompanyController
