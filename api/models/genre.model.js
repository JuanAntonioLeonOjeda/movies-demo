const { DataTypes } = require("sequelize");
const { connection } = require("../../database/db.index");

const Genre = connection.define(
  "genre",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Genre;
