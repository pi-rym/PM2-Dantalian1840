module.exports = {
  getAllMovies: (req, res) => {
    res
      .status(200)
      .send(
        "Endpoint para obtener MOVIES. Próximamente habrá datos de películas."
      );
  },
};
