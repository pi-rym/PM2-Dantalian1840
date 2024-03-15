const axios = require("axios");

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
      const movies = await axios("https://students-api.up.railway.app/movies");
      return movies.data.map((moviesData) => new Movies(moviesData));
    } catch (error) {
      return "error", error.message;
    }
  },

  // getMovies: async () => {
  //   try {
  //     const movies = [
  //       {
  //         director: "James Gunn",
  //         poster:
  //           "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  //         year: 2017,
  //         duration: "2h 16min",
  //         genre: ["Action", "Adventure", "Comedy"],
  //         rate: 7.7,
  //       },
  //       {
  //         title: "Star Wars: Episode IV - A New Hope",
  //         director: "George Lucas",
  //         poster:
  //           "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  //         year: 1977,
  //         duration: "2h 1min",
  //         genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
  //         rate: 8.7,
  //       },
  //       {
  //         title: "The Lord of the Rings: The Fellowship of the Ring",
  //         director: "Peter Jackson",
  //         poster:
  //           "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  //         year: 2001,
  //         duration: "2h 58min",
  //         genre: ["Action", "Adventure", "Drama", "Fantasy"],
  //         rate: 8.8,
  //       },
  //     ];
  //     console.log("Hasta aquí bien x2");
  //     return movies.map((moviesData) => new Movies(moviesData));
  //   } catch (error) {
  //     return "error", error.message;
  //   }
  // },
};
