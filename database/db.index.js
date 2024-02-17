const { Sequelize } = require("sequelize");

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
  }
)

const checkDB = async () => {
  try {
    await connection.authenticate()
    console.log('Connected to DB')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

const syncModels = async () => {
  try {
    await connection.sync()
    console.log('Models synched')
  } catch (error) {
    console.error('Error in model sync')
  }
}

module.exports = {
  connection,
  checkDB,
  syncModels
}