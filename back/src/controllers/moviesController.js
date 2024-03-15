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

  createMovie: async (req, res) => {
    const { title, poster, director } = req.body;
    try {
      await moviesService.createMovie(title, poster, director);
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
