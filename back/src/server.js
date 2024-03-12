const express = require("express");
const router = require("./routes/");

const app = express();

app.use(router); // Use es un método que encamina la solicitud

module.exports = app;
