import inquirer from "inquirer";
import boxen from "boxen";
import chalk from "chalk";
import { esPrimo } from "./primo.js";

function iniciar() {
  inquirer.prompt([
    {
      type: 'number',
      name: 'numero',
      message: chalk.red('Ingresa el valor a analizar: '),
    }
  ]).then(res => {
   const { numero } = res;

    if (esPrimo(numero)) {
      console.log(chalk.grey( boxen( chalk.green(`El numero ${numero} es un numero Primo ✅`) , { title: 'Analizador de numeros primos', titleAlignment: 'center', padding: 1 })));
    } 
    else {
      console.log(chalk.grey( boxen( chalk.red(`El numero ${numero} No es un numero primo ❌`) , { title: 'Analizador de numeros primos', titleAlignment: 'center', padding: 1 })));}
    
    reanudar();
  })};



function reanudar() {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'reanudar',
      message: chalk.yellow('¿Quieres revisar otro numero?'),
      default: true,
    }
  ]).then(res => {
    if (res.reanudar) {
      iniciar();
    } else {
      console.log(chalk.green('👋 ¡Gracias por usar el analizador!'));
    }
  });
}

// Inicia la aplicación.
iniciar();




