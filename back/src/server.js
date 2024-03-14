const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

//Se usará el middleware de morgan
// Aquí quiero que la solicitud ingrese, pase por el middleware de morgan y siga su camino.

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("PASO POR MI MIDDLEWARE");
  next();
});

app.use(router); // Use es un método que encamina la solicitud

module.exports = app;
