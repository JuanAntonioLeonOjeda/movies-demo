const userRouter = require("express").Router()

const {
  createUser,
  getOwnProfile
} = require('../controllers/user.controller')

const {
  checkAuth,
  checkAdmin
} = require('../utils/middlewares')

userRouter.get('/profile', checkAuth, getOwnProfile)
userRouter.post('/', checkAuth, checkAdmin, createUser)

module.exports = userRouter
