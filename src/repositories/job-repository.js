const JobModel = require('../models/job-model')
const Repository = require('./repository')

class JobRepository extends Repository {
  constructor () {
    super()
    this.Model = JobModel
  }
}

module.exports = JobRepository
