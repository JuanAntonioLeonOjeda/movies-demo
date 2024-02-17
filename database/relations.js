const User = require('../api/models/user.model')
const Movie = require('../api/models/movie.model')
const Genre = require('../api/models/genre.model')


const addRelations = () => {
  Genre.hasMany(Movie)
  Movie.belongsTo(Genre)

  Movie.belongsToMany(User, { through: 'users_movies' })
  User.belongsToMany(Movie, { through: 'users_movies' })
}

module.exports = addRelations