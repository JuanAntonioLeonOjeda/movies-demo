require("dotenv").config()

const {
  checkDB
} = require('./database/db.index')

checkDB()