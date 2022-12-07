const{v4: uudiv4}=require('uuid')

class Tarea{
id='';
descri='';

constructor(descri){
this.id=uudiv4();
this.descri= descri;
}
}
module.exports=Tarea;