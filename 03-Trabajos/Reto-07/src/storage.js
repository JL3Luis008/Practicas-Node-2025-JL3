import fs from 'fs/promises';
import path from 'path';

const dataDir = path.resolve('src/data');

const storage = {
  estudiantes: [],
  cursos: [],
  calificaciones: []
};

export async function loadData() {
  storage.estudiantes = JSON.parse(await fs.readFile(path.join(dataDir, 'estudiantes.json'), 'utf-8'));
  storage.cursos = JSON.parse(await fs.readFile(path.join(dataDir, 'cursos.json'), 'utf-8'));
  storage.calificaciones = JSON.parse(await fs.readFile(path.join(dataDir, 'calificaciones.json'), 'utf-8'));
}

export async function saveData(type) {
  if (!['estudiantes', 'cursos', 'calificaciones'].includes(type)) throw new Error('Invalid type');
  await fs.writeFile(
    path.join(dataDir, `${type}.json`),
    JSON.stringify(storage[type], null, 2)
  );
}

export default storage;