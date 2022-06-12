const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  birth_date: {
    type: Date,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    set: function (value) {
      return require('bcrypt').hashSync(value, 12)
    }
  },
  role: {
    type: String,
    required: false,
    default: 'Candidate'
  },
  company: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'Company'
  }
})

const model = mongoose.model('User', UserSchema)

module.exports = model
