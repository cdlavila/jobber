const ApplicationModel = require('../models/application-model')
const Repository = require('./repository')

class ApplicationRepository extends Repository {
  constructor () {
    super()
    this.model = ApplicationModel
    this.name = 'Application'
  }
}

module.exports = ApplicationRepository
