const Genre = require('../models/genre.model')

const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll({
      attributes: {
        exclude: 'id'
      }
    })
    
    res.status(200).json({
      message: "Get All Genres succesful",
      result: genres
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating genre",
      result: error
    })
  }
}

const getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id, {
      attributes: {
        exclude: 'id'
      }
    })

    if (!genre) return res.status(404).send('Genre not found')

    res.status(200).json({
      message: "Get One Genre succesful",
      result: genre,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating genre",
      result: error,
    });
  }
};

const createGenre = async (req, res) => {
  try {
    const genre = await Genre.create(req.body)

    res.status(200).json({
      message: "Genre created",
      result: genre
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating genre",
      result: error,
    })
  }
}

const updateGenre = async (req, res) => {
  try {
    const [result] = await Genre.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (!result) {
      return res.status(404).send('Genre not found')
    } else {
      res.status(200).json({
        message: "Update Genre succesful",
        result: req.body,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error creating genre",
      result: error,
    });
  }
};

const deleteGenre = async (req, res) => {
  try {
    const genre = await Genre.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!genre) return res.status(404).send("Genre not found");

    res.status(200).json({
      message: "Delete Genre succesful",
      result: genre,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating genre",
      result: error,
    });
  }
};

module.exports = {
  getAllGenres,
  getGenreById,
  createGenre,
  updateGenre,
  deleteGenre
}