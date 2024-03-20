const axios = require("axios");
const Movie = require("../models/Movie");

// Aquí hay una función

// La función se comunica con la base de datos para pedir la información solicitada por los usuarios.
// También le da el formato adecuado solicitado y requerido.

// Se puede tener información de: ID, nombre, fechas, año, creación, títulos. Pero se devolverá solo lo solicitado.

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
    const movies = await Movie.find();
    return movies.map((moviesData) => new Movies(moviesData));
  },

  getMovieByID: async (id) => {
    const movie = await Movie.findById(id);
    return movie;
  },

  findMovieByTitle: async (title) => {
    const movie = await Movie.findOne({ title });
    return movie;
  },

  createMovie: async (movie) => {
    const newMovie = await Movie.create(movie);
    return newMovie;
  },
};
