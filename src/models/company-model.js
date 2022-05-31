const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
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

const model = mongoose.model('company', companySchema)

module.exports = model
