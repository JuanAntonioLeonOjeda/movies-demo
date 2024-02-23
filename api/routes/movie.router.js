const movieRouter = require("express").Router();

const {
  getAllMovies,
  getMovieById,
  createMovie,
  addFavoriteMovie
} = require("../controllers/movie.controller");

const { checkAuth, checkAdmin } = require("../utils/middlewares");

movieRouter.get('/', checkAuth, getAllMovies)
movieRouter.get('/:id', checkAuth, getMovieById)
movieRouter.post("/", checkAuth, checkAdmin, createMovie);
movieRouter.put('/add/:id', checkAuth, addFavoriteMovie)

module.exports = movieRouter;
