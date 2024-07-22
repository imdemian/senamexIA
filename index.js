var express = require("express");
var path = require("path");
var app = express();
var ruta = require("./rutas/listaRutas"); // Asegúrate de que la ruta sea correcta

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public', { 'extensions': ['css'] }));
app.use("/", express.static(path.join(__dirname, "/Web")));
app.use("/", ruta); // Usa las rutas definidas en listaRutas.js

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});
