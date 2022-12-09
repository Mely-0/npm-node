const inquirer = require('inquirer');
const { validate } = require('uuid');
require('colors');

//PREGUNTAS
const preguntas = [
    {
        type:'list',
        name:'opcion',
        message:'Que desea hacer?',
        choices:[
            {
                value: '1',
                name:`${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name:`${'2.'.green} Listar tarea`
            },
            {
                value: '3',
                name:`${'3.'.green} Borrar tarea`
            },
            {
                value: '0',
                name:`${'0.'.green} Salir`
            }
        ]
    }
]
const inquirerMenu= async()=>{
    // console.clear();
    console.log('===================================='.green)
    console.log('=======Seleccione una opcion========'.white)
    console.log('===================================='.green)
  // el await espera al inquierer , que es una promesa y cuando este se resuelva los guarda en opcion y de ahi lo retornamos 
    const {opcion}= await inquirer.prompt(preguntas)// para hacer una pregunta
    return opcion
}
const pausa=async(mensaje)=>{
   const {pausa}= await inquirer.prompt
        ([{
            type:'input',
            name:'enter',
            message:mensaje
        }])
    return pausa;
}
const leerInput=async()=>{
const input = await inquirer.prompt({
        type:'input',
        name:'descripcion',
        message:'ingrese la tarea ',
        validate: function (input) {
            // Declare function as asynchronous, and save the done callback
            var done = this.async();
        
                input = input.trim();// quita los espacios solo para la validacion
                
                if (input == '') {
                    // Pass the return value in the done callback
                    done('You need to provide a description');
                    return;
                }
                // Pass the return value in the done callback
                done(null, true);
                
            }
            })
        
        return input;

}
    const menuBorrar = async (tareas = [])=>{ // menu de items a borrar 
        // lista las tareas en el apartado de borrar
        const choices = tareas.map( (tarea, i) => {
        
            const idx = `${i + 1}.`.green;
        
            return {
                value: tarea,
                name:  `${ idx } ${ tarea.descri.descripcion}`
            }
        });
        choices.unshift({
            value: '0',
            name: '0.'.green + ' Cancelar'
        });
        
        const preguntas = [
            {
                type: 'list',
                name: 'id',
                pageSize: 20,
                message: 'Borrar',
                choices
            }
        ]
        const { id } = await inquirer.prompt(preguntas);
        return id.id;
        }
        const confirmar = async(message) => {// confirmacion para borrar tareas
    
        const question = [
            {
                type: 'confirm',
                name: 'ok',
                message
            }
        ];
        
        const { ok } = await inquirer.prompt(question);
        return ok;
        } 
    
module.exports={
    inquirerMenu,
    pausa,
    leerInput,
    menuBorrar,
    confirmar
    
}
