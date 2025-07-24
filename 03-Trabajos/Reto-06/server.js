
const express = require('express');
const { contarPropiedades } = require("./utils/contarController.js");
const app = express();
const port = 3000;


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido al la app para saber cuantas propiedaddes tiene tu json, usa http://localhost:3000/contar  y agrega lo que datos desde postman con {name: monitor, price: 180, id: 5, place: AGS }");
});


app.get('/contar', (req, res) => {
  if (!datosGuardados) {
    return res.status(404).json({ mensaje: "Aún no se han recibido datos." });
  }
  const resultado = contarPropiedades(datosGuardados);
  res.json(resultado);
});



app.post('/contar', (req, res) => {
  const datosRecibidos = req.body;
  if (typeof datosRecibidos !== 'object' || datosRecibidos === null || Array.isArray(datosRecibidos)) {
    return res.status(400).json({ error: 'Se esperaba un objeto JSON válido (no un array ni null)' });
  }
  datosGuardados = datosRecibidos; 
  const resultado = contarPropiedades(datosRecibidos);
  res.json(resultado);
});

let datosGuardados = null;

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

