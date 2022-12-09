//creamos un objeto de tarea y una clase tareas para poder majerar y crear varios metodos con nuestras tareas .

const { guardarDB , mostarData, borrarData} = require("../helpers/guardarArchivo")

// la clase tarea me va crear una nueva tarea
class Tarea{


constructor(descri= ''){
this.id= Date.now(),
this.descri= descri
}
}
// la clase tareas va a administrarme la tarea
class Tareas {
//vamos a crear un objeto el cual va a almacenar nuestra tarea
constructor(){
    this.listadoTarea={}
}
//vamos a crear un nueva tarea
newTarea(dec){
const tarea = new Tarea(dec)
// aqui ubicamos al funcion guardardb y le vamos a pasarle un objeto json

//para guardar el objeto que primero tenga id y despues data.
const{id}=tarea;
//aqui estamos destruturando el id 
this.listadoTarea[id]=tarea;
//aqui creamo la llave: this.listadoTarea[id] y aqui el valor:=tarea 
guardarDB(this.listadoTarea[id])
//aca le pasamos la llave id 
}

//vamoa a añadirle un metodo get , para que traiga todas las tareas
getTarea(){
   //vamos a llamar o a requerir la funcion mostrardata y hay que almacenarlo en algo , en este caso una constate , porque lo que va a traer es un dato

   const datajs= mostarData();
   //esto nos tare toda la data , que es un vector de archivos json

   //vamos a crear una variable para ir enumerando lpd datos que  van a ir saliendo 
   let contador= 1;
   //vamos hacer un forin para que recorra cada item del array
   for (const key in datajs) {
    //aca puede que sea decri o descripcion
   const {descri}= datajs[key]
   console.log(`${contador.toString().green}.${descri.descripcion}`)
   contador++;
   }
}
traerDataFromDB() {
   //DEVUELVE UN ARRAY DE LA DATA 
   const dataObj = mostarData();
   let array = [];

   for (const property in dataObj) {
   array[property] = dataObj[property];
   }
   return array;
}
deleteData(id) {
   borrarData(id);//ELIMINA DE LA DATA
}

}
module.exports={
   Tareas 
}