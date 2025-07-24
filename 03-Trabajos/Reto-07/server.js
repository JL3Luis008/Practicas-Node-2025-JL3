import express from 'express';
import { logger } from './src/middlewares/logger.js';
import estudiantesRoutes from './src/routes/estudiantesRoutes.js';
import { loadData } from './src/storage.js';

const PORT = 3000;

await loadData();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido al la app para busqueda de calificaciones de los cursos de estudiantes de primaria, usa http://localhost:3000/api  y agrega lo que datos desde postman con { id: , estudianteId: , cursoId: , calificacion: }");
});


//http://localhost:3000/api/estudiantes
app.use('/api', estudiantesRoutes);
//app.use('/api', cursosRoutes);



//http://localhost:3000/api/buscar?curso=
app.get('/api/buscar', (req, res) => {
const { curso } = req.query;
console.log(req.query);

if (!curso) {
   return res.status(400).json({ error: 'Faltan parametros en la ruta' });
}

res.json({
  busqueda: curso,
  mensaje: `Buscando ${curso}...`
});
})
  


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})

