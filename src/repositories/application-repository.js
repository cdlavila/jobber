const ApplicationModel = require('../models/application-model')
const Repository = require('./repository')

class ApplicationRepository extends Repository {
  constructor () {
    super()
    this.Model = ApplicationModel
  }
}

module.exports = ApplicationRepository
