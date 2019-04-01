const mongo = require('mongoose')
const Schema = mongo.Schema

const userSchema = new Schema({
  username: String,
  password: String
})

// eslint-disable-next-line no-unused-vars
const userModel = mongo.model('User', userSchema)
