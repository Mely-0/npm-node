require('colors');
const { guardarDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, leerInput, pausa, mostrarId}=require('./helpers/inquirer');
const Tareas= require('./models/tareas')
console.clear();
const main =async()=>{


        let opcion='';
        const tareas= new Tareas();
        do {
            //edsta opcion imprime el menu
            opcion= await inquirerMenu() 
            switch (opcion) {
            case '1':
                const descri= await leerInput('descripcion:')
                tareas.crearTarea(descri)
                //crear opcione
            break;
            case '2':
                //mostrar
                console.log(tareas.listadoArray)
            break;
            case '3':
                //borrar
                // const borrar= await mostrarId(tareas.listadoArray)
                // console.log(borrar)
            break;
        
        }
            guardarDB(tareas.listadoArray)
        
            await pausa();

        } while (opcion !=='0');
}

main();