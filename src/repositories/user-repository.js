const UserModel = require('../models/user-model')
const Repository = require('./repository')

class UserRepository extends Repository {
  constructor () {
    super()
    this.Model = UserModel
  }
}

module.exports = UserRepository
