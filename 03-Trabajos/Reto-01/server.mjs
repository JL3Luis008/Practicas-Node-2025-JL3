// 🧠 Ejercicio 1: Suma de Dos Números

import inquirer from "inquirer";

//Promptpara ingresar los dos numeros para analizar
  inquirer.prompt([
    {
      type: 'number',
      name: 'numero',
      message: 'Ingresa el primer numero: ',
    },
    {
      type: 'number',
      name: 'numero2',
      message: 'Ingresa el segundo numero: ',
    }

  ]).then(res => {
       const { numero, numero2 } = res;
  
        console.log(`Los numeros ${numero} y ${numero2} dan como resultado:`);
        console.log(`La suma: `, sum(numero, numero2));
        console.log(`La resta: `, rest(numero, numero2));
        console.log(`La multiplicacion: `, mult(numero, numero2));
        console.log(`La division: `, div(numero, numero2));
        console.log(`Suma como strings: `, numberToString(numero, numero2));

  });

// funciones Operaciones numericas
function sum(numero, numero2) {
  let suma = 0;
  suma = numero + numero2;
  return suma;
}
function rest(numero, numero2) {
  let resta = 0;
  resta = numero - numero2;
  return resta;
}
function mult(numero, numero2) {
  let multi = 0;
  multi = numero * numero2;
  return multi;
}
function div(numero, numero2) {
  let divi = 0;
  divi = numero / numero2;
  return divi;
}


// 🔢 Ejercicio 2: Convertir un Número a Texto

// funcion que cambia los numeros agregados a strings 
function numberToString(numero, numero2) {
 let NumeroAstring = [];
  NumeroAstring = numero.toString() + numero2.toString();
  return NumeroAstring;
}

