const moviesService = require("../services/moviesService");
const catchAsync = require("../utils/catchAsync");

const getAllMovies = async (req, res) => {
  const movies = await moviesService.getMovies();
  res.status(200).json(movies);
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  const movie = await moviesService.getMovieByID(id);
  res.status(200).json(movie);
};

const findMovieByTitle = async (req, res) => {
  const { title } = req.body;
  const movie = await moviesService.findMovieByTitle(title);
  res.status(200).json(movie);
};

const createMovie = async (req, res) => {
  const { title, director, poster, year, duration, genre, rate } = req.body;
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
};

module.exports = {
  getAllMovies: catchAsync(getAllMovies),
  getMovieById: catchAsync(getMovieById),
  findMovieByTitle: catchAsync(findMovieByTitle),
  createMovie: catchAsync(createMovie),
};
