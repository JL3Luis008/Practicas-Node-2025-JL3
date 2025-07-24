const express = require('express');
const { program } = require("commander");
const { encontrarMayor } = require("./utils/encontrarMayor.js");
const server = express();
let port = 3000;

// Pagina principal: responde con un saludo y las instrucciones.
server.get("/", (req, res) => {
  res.send("Bienvenido al buscador del numero mayor agrega en el buscador http://localhost:3000/encontrarMayor?numeros=  y agrega lo que deseas invertir");
});

// Inversor: codifica el numeros recibido por query string (?numeros=).

server.get("/encontrarMayor", (req, res) => {
  console.log(req.query.numeros);
  res.json(encontrarMayor(req.query.numeros));
});



server.listen(port, () => {
  console.log("Servidor iniciado en el puerto 3000 (http://localhost:3000)");
});