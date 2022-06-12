const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
}, {
  versionKey: false
})

const model = mongoose.model('Company', CompanySchema)

module.exports = model
