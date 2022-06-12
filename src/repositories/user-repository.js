const UserModel = require('../models/user-model')
const Repository = require('./repository')

class UserRepository extends Repository {
  constructor () {
    super()
    this.model = UserModel
    this.name = 'User'
  }
}

module.exports = UserRepository
