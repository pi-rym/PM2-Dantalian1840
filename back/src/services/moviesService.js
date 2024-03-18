const axios = require("axios");
const Movie = require("../models/Movie");

class Movies {
  constructor(item) {
    const { title, director, poster, year, duration, genre, rate } = item;
    if (!title || !director || !poster) {
      throw new Error("Faltan datos");
    }
    this.title = title;
    this.director = director;
    this.poster = poster;
    this.year = year;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
  }
}

module.exports = {
  //? Operaciones asíncronas
  // Consultar una BDD
  // Realizar una solicitud a un servicio externo
  // Leerán la información de un archivo

  getMovies: async () => {
    try {
      const movies = await Movie.find();
      return movies.map((moviesData) => new Movies(moviesData));
    } catch (error) {
      return "error", error.message;
    }
  },
};
