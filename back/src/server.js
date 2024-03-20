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

app.use(router); // Use es un método que encamina la solicitud

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

module.exports = app;
