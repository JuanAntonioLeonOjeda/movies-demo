const { DataTypes } = require("sequelize");
const { connection } = require("../../database/db.index");

const Movie = connection.define(
  "movie",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Movie;
