const express = require('express');
const { program } = require("commander");
const { invertirCadena } = require("./utils/invertir.js");
const server = express();
let port = 3000;

// Pagina principal: responde con un saludo y las instrucciones.
server.get("/", (req, res) => {
  res.send("Bienvenido al inversor de palabras! agrega en el buscador http://localhost:3000/invertir?mensaje=  y agrega lo que deseas invertir");
});

// Inversor: codifica el mensaje recibido por query string (?mensaje=).

server.get("/invertir", (req, res) => {
  console.log(req.query.mensaje);
  res.send(invertirCadena(req.query.mensaje));
});



server.listen(port, () => {
  console.log("Servidor iniciado en el puerto 3000 (http://localhost:3000)");
});