import mongoose from 'mongoose'

const db = async () =>  {
  try {
    console.log('connectiong to mongo server...')
    await mongoose.connect(process.env.MONGO_URI)
    console.log('successfully connected to database')
  } catch (err) {
    throw new Error(err)
  }
}

export default db