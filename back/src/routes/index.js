// Definición de las rutas para comunicación

// Solicitud a GET /users => Controller

const { Router } = require("express");
const { controller } = require("../controllers");
const moviesRouter = require("./moviesRouter");

const router = Router(); // Define enrutador, objeto capaz de definir las rutas

router.get("/", controller); //Definición de la ruta y el controlador encargado
router.use("/movies", moviesRouter);

module.exports = router;
