const genreRouter = require("express").Router()

const { 
  getAllGenres,
  getGenreById,
  createGenre,
  updateGenre,
  deleteGenre
 } = require("../controllers/genre.controller")

const { checkAuth, checkAdmin } = require("../utils/middlewares")

genreRouter.get('/', checkAuth, getAllGenres)
genreRouter.get('/:id', checkAuth, getGenreById)
genreRouter.post("/", checkAuth, checkAdmin, createGenre)
genreRouter.put('/:id', checkAuth, checkAdmin, updateGenre)
genreRouter.delete('/:id', checkAuth, checkAdmin, deleteGenre)

module.exports = genreRouter
