import storage, { saveData } from '../storage.js';

export function getEstudiantes(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(storage.estudiantes));
}

export async function addEstudiante(req, res) {
  let body = '';
  req.on('data', chunk => (body += chunk));
  req.on('end', async () => {
    const estudiante = JSON.parse(body);
    estudiante.id = storage.estudiantes.length ? Math.max(...storage.estudiantes.map(u => u.id)) + 1 : 1;
    storage.estudiantes.push(estudiante);
    await saveData('estudiantes');
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Estudiante creado', usuario: estudiante }));
  });
}