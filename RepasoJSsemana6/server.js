import express from 'express';

import { ejercicio1 } from './ejercicios/ejercicio1.js';
import { ejercicio2 } from './ejercicios/ejercicio2.js';
import { ejercicio3 } from './ejercicios/ejercicio3.js';
import { ejercicio4 } from './ejercicios/ejercicio4.js';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡Bienvenido al repaso de Javascript con express!');
});

//http://localhost:3000/ejercicio/1?input=
app.get('/ejercicio/:id', (req, res) => {
  const { id } = req.params;
  const input = req.query.input || '';
  let resultado;
  switch (id) {
    //http://localhost:3000/ejercicio/1?input=Hola
    case '1': resultado = ejercicio1(input); break;
    //http://localhost:3000/ejercicio/2?input=Hola mundo 123 
    case '2': resultado = ejercicio2(input); break;
     //http://localhost:3000/ejercicio/3?input=Hola mundo 123 
    case '3': resultado = ejercicio3(input); break;
//http://localhost:3000/ejercicio/4?input=1,2,3,4,5,6 
    case '3': resultado = ejercicio4(input); break;


    default: return res.send('Ejercicio no encontrado');
  }

  res.send(`Resultado del ejercicio ${id}: ${resultado}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});