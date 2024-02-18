const Movie = require('../models/movie.model')
const Genre = require('../models/genre.model')

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll({
      attributes: {
        exclude: "id",
      },
      where: req.query
    });

    res.status(200).json({
      message: "Get All movies succesful",
      result: movies,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting all movies",
      result: error,
    });
  }
}

const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id,{
      include: 'genre'
    })

    res.status(200).json({
      message: "Get All movies succesful",
      result: movie,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting one movie",
      result: error.message,
    });
  }
};

const createMovie = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.body.genreId)

    if (!genre) return res.status(404).send("Genre not found")

    const movie = await genre.createMovie({
      title: req.body.title,
      description: req.body.description
    })
    
    res.status(200).json({
      message: "Create movie succesful",
      result: movie
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating genre",
      result: error
    })
  }
}

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie
}