const userRouter = require("express").Router()

const {
  createUser
} = require('../controllers/user.controller')

const {
  checkAuth,
  checkAdmin
} = require('../utils/middlewares')

userRouter.post('/', checkAuth, checkAdmin, createUser)

module.exports = userRouter
