const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  poster: String,
  year: Number,
  genre: Array,
  rate: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
