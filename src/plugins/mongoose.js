const mongoose = require('mongoose')

const MongoosePlugin = {
  name: 'MongoosePlugin',
  version: '1.0.0',
  register: async (server, options) => {
    if (process.env.NODE_ENV === 'development') {
      await mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:27017`, {
        dbName: process.env.MONGO_DATABASE
      }, async (err) => {
        if (err) {
          console.log(`Mongodb error: ${err.message}`)
          process.exit(1)
        } else {
          console.log('Mongodb connection established')
        }
      })
    }

    if (process.env.NODE_ENV === 'production') {
      await mongoose.connect(process.env.MONGO_URL, {}, (err) => {
        if (err) {
          console.log(`Mongodb error: ${err.message}`)
          process.exit(1)
        } else {
          console.log('Mongodb connection established')
        }
      })
    }
  }
}

module.exports = MongoosePlugin
