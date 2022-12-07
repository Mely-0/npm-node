const Tarea= require('./tarea')
class Tareas {
_listado={

};

constructor(){
    this._listado={}
}
nuevaTarea(desc){
    const item = new tarea(desc);

    const {id,...all} = item; // nuevo de ES9 

    this.listadoTareas[id] = item;
    saveData(this.listadoTareas[id]);
}



}
module.exports=Tareas;