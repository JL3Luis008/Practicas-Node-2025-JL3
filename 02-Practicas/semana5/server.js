import express from 'express';
import { logger } from './src/middlewares/logger.js';
import usersRoutes from './src/routes/usersRoutes.js';
import { loadData } from './src/storage.js';

const PORT = 3000;

await loadData();

const app = express();

app.use(express.json());

app.get('/:name', logger, (req, res) => {
  //http://localhost:3000/Rodrigo?isAdmin=true
  if (req.query.isAdmin === 'true') {
    res.send(`Hola  ${req.params.name} eres admin`);
  } else {
    res.send('HOLA  ' + req.params.name);
  }
});

//http://localhost:3000/api/users
app.use('/api', usersRoutes);
//app.use('/api', productsRoutes);

//http://localhost:3000/saludo/Luis
app.get('/saludo/:nombre', (req, res) => {
const { nombre } = req.params;
res.json({mensaje: `Hola ${nombre}!`});
});

//http://localhost:3000/api/edad?anioNacimiento=1990
app.get('/api/edad', (req, res) => {
const anio = parseInt(req.query.anioNacimiento);
const actual = new Date().getFullYear();

if(!anio || anio >= actual) {
  res.status(400).json({Error: 'Año invalido'});
}

const edad = actual - anio;
res.json({ anioNacimiento: anio, edad});
})

// http://localhost:3000/suma/5/3
app.get('/suma/:a/:b', (req, res) => {
  const { a , b } = req.params;
  const suma = Number(a) + Number(b);

  if (isNaN(suma)) {
    return res.status(400).json({ error: 'Parametros invalidos' });
  }

  res.json({ resultado: suma });
})


//http://localhost:3000/api/buscar?producto=teclado&categoria=hardware
app.get('/api/buscar', (req, res) => {
const { producto, categoria } = req.query;
console.log(req.query);

if (!producto || !categoria) {
   return res.status(400).json({ error: 'Faltan parametros en la ruta' });
}

res.json({
  busqueda: producto,
  categoria,
  mensaje: `Buscando ${producto} en la categoria ${categoria}...`
});
})
  
//http://localhost:3000/perfil/Luis?lang=es
app.get('/perfil/:usuario', (req, res) => {
const { usuario } = req.params;
const lang = req.query.lang;

let mensaje = `Welcome ${usuario}`;
if (lang === 'es') {
  mensaje = `Bienvenido ${usuario}`;
}
if (lang === 'fr') {
  mensaje = `Bienvenue ${usuario}`;
}

res.json({ mensaje, lenguage: lang || 'default'});
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})

