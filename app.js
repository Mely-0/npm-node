require('colors');
const { inquirerMenu, leerInput, pausa,menuBorrar,confirmar}=require('./helpers/inquirer');
const{Tareas}= require ('./models/tarea')
console.clear();
const main =async()=>{
        
        const tareas= new Tareas();
        let opcion='';
        do {
            console.clear();
            //esta opcion imprime el menu
            opcion= await inquirerMenu() 
            switch (opcion) {
                case '1':
                    console.clear();
                    //crear tarea
                    const dec=await leerInput();
                    tareas.newTarea(dec);
            
            break;
            case '2':
                console.clear();
            // listar tarea
            tareas.getTarea();
            await pausa(`Presione ${'enter'.green} para continuar`)
            break;
            case '3':
                const array = tareas.traerDataFromDB();
                const deleteID = await menuBorrar(array);
                const ok = await confirmar(`'¿ Desea ${ 'borrar'.red } la ${'tarea'.green }? '`);
                (ok) ? tareas.deleteData(deleteID) : false
                await pausa(`Presione ${'Enter'.green} para Continuar `);
            break;
            case '0':
        
        }
    
        } while (opcion !=='0');
        //el do while se va a ejecutar mientras que opciones sea de cero
}
main();