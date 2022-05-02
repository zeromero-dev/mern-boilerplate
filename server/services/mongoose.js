import mongoose from 'mongoose'

import config from '../config'

mongoose.connection.on('connected', () => {
  // eslint-disable-next-line
  console.log('DB is connected')
})

mongoose.connection.on('error', (err) => {
  // eslint-disable-next-line
  console.log("DB isn't connected")
  // eslint-disable-next-line
  console.log(err)
  process.exit(1)
})

export default {
  connect: async (mongoUrl = config.mongoUrl) => {
    await mongoose.connect(mongoUrl, {})
    return mongoose.connection
  }
}
