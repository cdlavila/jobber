const CandidateModel = require('../models/candidate-model')
const Repository = require('./repository')

class CandidateRepository extends Repository {
  constructor () {
    super()
    this.model = CandidateModel
    this.name = 'Candidate'
  }
}

module.exports = CandidateRepository
