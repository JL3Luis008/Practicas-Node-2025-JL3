
export function separarParesImpares(numeros) {
  let pares = [];
  let impares = [];

  // Convertir el string de entrada a un array de números
  const numeroArray = numeros.split(",").map(Number);

  for (let i = 0; i < numeroArray.length; i++) {
    if (numeroArray[i] % 2 === 0) {
      pares.push(numeroArray[i]);
    } else {
      impares.push(numeroArray[i]);
    }
  }

  // retorna un objeto con los arrays
  return {
    numeroArray,
    pares,
    impares
  };
}