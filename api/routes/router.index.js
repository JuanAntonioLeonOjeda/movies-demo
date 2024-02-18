const router = require("express").Router()

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const genreRouter = require('./genre.router')
const movieRouter = require('./movie.router')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/genre', genreRouter)
router.use('/movie', movieRouter)

module.exports = router