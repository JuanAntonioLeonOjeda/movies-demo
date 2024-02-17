const userRouter = require("express").Router()

const {
  createUser
} = require('../controllers/user.controller')

userRouter.post('/', createUser)

module.exports = userRouter
