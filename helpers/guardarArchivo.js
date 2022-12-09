//se va a aguardar los achivos .texto y vamos a escribir los datos en texto pla
const fs= require('fs')
//vamos a crar un vestor , que es dode vamos a  guardar la data la data en un 
let inter =[];
//donde quiero enviar la informacion 
const archivo='./data.json'
//funcion para hacer el guardado del elemento
const guardarDB=(data)=>{
//se utiliza filesysten para enviar la informacion al archivo db 

//vamos a traer la data que ya esta para que cada que uno ingrese quede registrado lo que habiamos registrado anteriormente : 

const dbdata= fs.readFileSync(archivo,{encoding:'utf-8'})
//si data no es vacio , hay que llevarla al vector inter , pero hay que pasarla a json 
if(!dbdata == ''){
    const datajson= JSON.parse(dbdata);
    inter =datajson;
}
//aqui es donde vamos a guardar la data 
// para añadir un elemnto al princio del vector:
inter.push(data);
//aqui le estamos mandando la direccion donde va a guardar la data , 'archivo'
//fs solo guarda texto , no archivo json , por eso es que los tranformamos en string :JSON.stringify y lo que queremos convertir es inter 
fs.writeFileSync(archivo,JSON.stringify(inter))
}

// para listar las tareas hay que creear una funcion que consulte la base de datos

const mostarData=()=>{
    //aqui vamos a verificar si existe con un metodo de node y le vamos a pasar el path que es 'archivo'
    if(!fs.existsSync(archivo)){
        return null
    }
    // si existe hay que leerlo y para eso crearemos una constante, le pasaremos el path y el encodin con el fin de que devulvan los lejibles para nosotros
    const dbdata= fs.readFileSync(archivo, {encoding:'utf-8'});
    //se supone que ya leimos la data , pero ahora esta en texto y ahora hay que volverla a sarsear como json 

    //conatnte para pasarlo json 
    const datajson= JSON.parse(dbdata)
    //vamos a retornar la data yan en tipo json 
    return datajson
    // esto se lo vamos a pasar a la clase tareas
}
// crearemos la funcion para eliminar , leeremos los archivos 
const borrarData=(id)=>{
    const dbData = fs.readFileSync(archivo,{encoding: 'utf-8'});
    if (!dbData == '') {// trae la data ya existente 
        const dataObj = JSON.parse(dbData);
        inter = dataObj;
    }
    // crearemos una nueva data o lista de tarea :esta lista de tarea va mostrar la lsiatas que sean distintas al id seleccionado . 

    const nuevadata = inter.filter((obj)=>{ 
        return obj.id != id});
    // aqui volvemos a reescribir , enviar o crear la nueva lista : 
    fs.writeFileSync(archivo,JSON.stringify(nuevadata));
}

module.exports={
    guardarDB, mostarData, borrarData
}