const moviesService = require("../services/moviesService");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await moviesService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({
        error: "Error interno del servidor",
      });
    }
  },

  getMovieById: async (req, res) => {
    const { id } = req.params;
    const movie = await moviesService.getMovieByID(id);
    res.status(200).json(movie);
  },

  findMovieByTitle: async (req, res) => {
    const { title } = req.body;
    const movie = await moviesService.findMovieByTitle(title);
    res.status(200).json(movie);
  },

  createMovie: async (req, res) => {
    const { title, director, poster, year, duration, genre, rate } = req.body;
    try {
      await moviesService.createMovie({
        title,
        director,
        poster,
        year,
        duration,
        genre,
        rate,
      });
      res.status(201).json({
        message: "Película creada correctamente",
      });
    } catch (error) {
      res.status(500).json({
        error: "Error al crear",
      });
    }
  },
};
