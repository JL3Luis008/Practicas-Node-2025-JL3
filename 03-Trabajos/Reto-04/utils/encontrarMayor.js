export function encontrarMayor(numeros) {

  const numeroMayor = numeros.split(",").map(Number);
  const Mayor = Math.max(...numeroMayor)
       console.log(numeroMayor);
  console.log(typeof(numeroMayor));
       console.log(Mayor);
  console.log(typeof(Mayor));
  return Mayor;
}

