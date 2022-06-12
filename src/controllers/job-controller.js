const StatusCode = require('../network/status-code')
const Response = require('../network/response')
const JobRepository = require('../repositories/job-repository')

class JobController {
  static async create (request, h) {
    try {
      const jobRepository = new JobRepository()
      const job = await jobRepository.create(request?.payload)
      return Response.success(h, StatusCode?.CREATED, job, 'Job created successfully')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async getAll (request, h) {
    try {
      const jobRepository = new JobRepository()
      const jobs = await jobRepository.getAll({}, 'company')
      return Response.success(h, StatusCode?.OK, jobs, 'Job list')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async getAllByCompany (request, h) {
    try {
      const jobRepository = new JobRepository()
      const jobs = await jobRepository.getAll({ company: request?.params?.company })
      return Response.success(h, StatusCode?.OK, jobs, 'Job list')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async getById (request, h) {
    try {
      const jobRepository = new JobRepository()
      const job = await jobRepository.getById(request?.params?.id, 'company')
      if (!job) { return Response.error(h, StatusCode?.NOT_FOUND, 'Job not found') }
      return Response.success(h, StatusCode?.OK, job, `Job of id ${request?.params?.id}`)
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async update (request, h) {
    try {
      const jobRepository = new JobRepository()
      const job = await jobRepository.update(request?.params?.id, request?.payload)
      return Response.success(h, StatusCode?.OK, job, 'Job updated successfully')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async delete (request, h) {
    try {
      const jobRepository = new JobRepository()
      await jobRepository.delete(request?.params?.id)
      return Response.success(h, StatusCode?.NO_CONTENT)
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }
}

module.exports = JobController
