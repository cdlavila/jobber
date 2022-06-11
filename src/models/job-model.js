const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  company: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Company'
  }
})

const model = mongoose.model('Job', JobSchema)

module.exports = model
