import chalk from 'chalk';
import saludar from '../saludo.js';
import inquirer from 'inquirer';
import figlet from 'figlet';

inquirer.prompt([
    {
        type:'input',
        name:'nombre',
        message:'¿como te llamas?'
    }, 
    {
        type:'input',
        name:'edad',
        message:'¿cual es tu edad?' 
    },
    {
        type:'list',
        name:'color',
        message:'¿Cual es tu color favorito?',
        choices:['Rojo','Verde', 'Azul']
    }
]).then(respuestas => {
    chalk.blue(figlet(respuestas.nombre, function (err, nombre){
         console.log(nombre);
    }));

    if (respuestas.edad >= 18){
    console.log(saludar(respuestas.nombre, respuestas.edad, true));
    } else {
    console.log(saludar(respuestas.nombre, respuestas.edad, false));  
    
     console.log(`Tu color favorito es ${respuestas.color}`);
}});

//console.log(chalk.grey(saludar("Inadaptados")));