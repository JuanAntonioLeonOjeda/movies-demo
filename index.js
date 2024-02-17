require("dotenv").config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const {
  checkDB,
  syncModels
} = require('./database/db.index')

const addRelations = require('./database/relations')

const connectToDB = async () => {
  await checkDB();
  addRelations();
  await syncModels();
}

const startExpress = () => {
  try {
    const app = express()

    app.use(cors())
    app.use(morgan('dev'))
    app.use(express.json())

    app.get('/api', (req, res) => {
      res.send('Request received succesfuly')
    })
  
    app.listen(process.env.PORT, () => {
      console.log(`Express started. Listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    throw new Error (error)
  }

}

;(async () => {
  await connectToDB()
  startExpress()
})()