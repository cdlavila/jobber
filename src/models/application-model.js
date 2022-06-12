const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApplicationSchema = new Schema({
  candidate: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  job: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Job'
  },
  hired: {
    type: Boolean,
    default: false
  }
})

const model = mongoose.model('Application', ApplicationSchema)

module.exports = model
