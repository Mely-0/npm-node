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
                value: '4',
                name:`${'4.'.green} Salir`
            }
        ]
    }
]
const inquirerMenu= async()=>{
    // console.clear();
    console.log('===================================='.green)
    console.log('=======Seleccione una opcion========'.white)
    console.log('===================================='.green)

    const {opcion}= await inquirer.prompt(preguntas)// para hacer una pregunta
    return opcion
}
const pausa=async()=>{
    const question=[
        {
            type:'input',
            name:'enter',
            message:`Presione ${'enter'.green} para continuar`
        }
    ]
    const {enter}= await inquirer.prompt(question)
    return enter
}
const leerInput=async(mensaje)=>{
const question=[
    {
        type:'input',
        name:'desc',
        message:mensaje,
        //el validate para no permitir que no me envie un valor , sienpre tiene que recirbir un valor, forzar a la persona que ingrese un valor
        validate(value){
            if(value.length ===0){
                return 'por favor ingrse un valor'
            }
            return true;
        }
    }
];
const {desc}= await inquirer.prompt(question);
return desc
}
module.exports={
    inquirerMenu,
    pausa,
    leerInput
}
