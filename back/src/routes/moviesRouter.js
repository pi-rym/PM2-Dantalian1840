const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const validateMovie = require("../middlewares/validateMovie");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getAllMovies); // No tiene paréntesis porque se indica cuál es la función, pero no se ejecuta
moviesRouter.post("/", validateMovie, moviesController.createMovie); // El post va a ir por su camino y entre ellos el middleware validateMovie

module.exports = moviesRouter;
