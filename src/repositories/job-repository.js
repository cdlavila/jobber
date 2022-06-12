const JobModel = require('../models/job-model')
const Repository = require('./repository')

class JobRepository extends Repository {
  constructor () {
    super()
    this.model = JobModel
    this.name = 'Job'
  }
}

module.exports = JobRepository
