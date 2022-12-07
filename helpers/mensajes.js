const { resolve } = require('path');

require ('colors');

const mostrarMenu=()=>{

    return new Promise(resolve=>{
        console.clear();
    console.log('===================================='.green)
    console.log('=======Seleccione una opcion========'.green)
    console.log('===================================='.green)
    console.log(`${'1.'.green} crear tarea`)
    console.log(`${'2.'.green} listar tareas`)
    console.log(`${'3.'.green} borrar tarea`)
    console.log(`${'4.'.green} salir`)

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,// mostar algun mensaje de consola
        });

        //mostrar la informacion al usuario

        readline.question(`Selecccione una opcion:`, (tarea) => {
        readline.close();
        resolve(tarea)
        }); 
    });

}
const pausa=()=>{
    return new Promise((resolve) => {
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,// mostar algun mensaje de consola
        });

        //mostrar la informacion al usuario

        readline.question(`Precione ${'ENTER'.green} para continuar`, (tarea) => {
        readline.close();
        resolve()
        }); 
    })
}

module.exports={
    mostrarMenu,
    pausa
}