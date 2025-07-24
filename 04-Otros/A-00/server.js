const express = require('express');
const { program } = require("commander");
const server = express();
let port = 3000;

// Pagina principal: responde con un saludo y las instrucciones.
server.get("/", (req, res) => {
  res.send("Bienvenido al inversor de palabras! agrega en el buscador http://localhost:3000/mayor?numeros=10,3,9,1  y agrega lo que deseas invertir");
});

// Inversor: codifica el mensaje recibido por query string (?mensaje=).

server.get("/mayor", (req, res) => {
  console.log(req.query.numeros);
  res.send(encontrarMayor(req.query.numeros));
  let Lista = parseInt(req.query.numeros);
  console.log("esta es la lista", Lista);
  console.log(typeof Lista);
});



function encontrarMayor(Lista) {
    let mayor = Lista[0];
    Math.max(...Lista)
    
    return mayor;
    
}





server.listen(port, () => {
  console.log("Servidor iniciado en el puerto 3000 (http://localhost:3000)");
});