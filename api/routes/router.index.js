const router = require("express").Router()

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const genreRouter = require('./genre.router')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/genre', genreRouter)

module.exports = router