const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApplicationSchema = new Schema({
  candidate: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Candidate'
  },
  job: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Job'
  },
  hired: Boolean
})

const model = mongoose.model('Application', ApplicationSchema)

module.exports = model
