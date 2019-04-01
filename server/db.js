const mongo = require('mongoose')

mongo.connect(process.env.DB_HOST, {
  useNewUrlParser: true
})
