require("dotenv").config()

const {
  checkDB,
  syncModels
} = require('./database/db.index')

const addRelations = require('./database/relations')


;(async () => {
  await checkDB()
  addRelations()
  syncModels()
})()