const express = require("express");
const ruta = express.Router();

// Ruta para la página principal
ruta.get("/", (req, res) => {
  res.render("Home/home");
});

module.exports = ruta;
