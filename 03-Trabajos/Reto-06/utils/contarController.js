export function contarPropiedades(datos) {
  if (typeof datos !== 'object' || datos === null) {
    throw new Error('El parámetro debe ser un objeto no nulo');
  }

  const propiedades = Object.keys(datos).length;

  return {
    datos,
    propiedades
  };
}
