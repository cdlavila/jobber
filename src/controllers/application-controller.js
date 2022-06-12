const StatusCode = require('../network/status-code')
const Response = require('../network/response')
const ApplicationRepository = require('../repositories/application-repository')

class ApplicationController {
  static async create (request, h) {
    try {
      const applicationRepository = new ApplicationRepository()
      const application = await applicationRepository.create(request?.payload)
      return Response.success(h, StatusCode?.CREATED, application, 'Application created successfully')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async getAll (request, h) {
    try {
      const applicationRepository = new ApplicationRepository()
      const applications = await applicationRepository.getAll({}, ['job', 'candidate'])
      return Response.success(h, StatusCode?.OK, applications, 'Applications list')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async getAllByJob (request, h) {
    try {
      const applicationRepository = new ApplicationRepository()
      const applications = await applicationRepository.getAll({ job: request?.params?.job }, 'candidate')
      return Response.success(h, StatusCode?.OK, applications, 'Applications list')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async getById (request, h) {
    try {
      const applicationRepository = new ApplicationRepository()
      const application = await applicationRepository.getById(request?.params?.id, ['job', 'candidate'])
      if (!application) { return Response.error(h, StatusCode?.NOT_FOUND, 'Application not found') }
      return Response.success(h, StatusCode?.OK, application, `Application of id ${request?.params?.id}`)
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async update (request, h) {
    try {
      const applicationRepository = new ApplicationRepository()
      if (!request?.params?.id) { return Response.error(h, StatusCode?.BAD_REQUEST, 'Application id is required') }
      const application = await applicationRepository.update(request?.params?.id, request?.payload)
      return Response.success(h, StatusCode?.OK, application, 'Application updated successfully')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async delete (request, h) {
    try {
      const applicationRepository = new ApplicationRepository()
      await applicationRepository.delete(request?.params?.id)
      return Response.success(h, StatusCode?.NO_CONTENT)
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }
}

module.exports = ApplicationController
