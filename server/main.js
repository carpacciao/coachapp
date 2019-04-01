const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const saltRounds = 10
require('dotenv').config({
  debug: process.env.DEBUG
})

const app = express()

app.use(bodyParser.json())
app.use(cors())

// FILES
require('./db')

// LISTEN
app.listen(process.env.SERVER_PORT, () => console.log('Application launched on the port: ' + process.env.SERVER_PORT))
