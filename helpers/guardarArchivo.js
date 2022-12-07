
const fs= require('fs')
const guardarDB=(data)=>{
//donde quiero enviar la informacion 
//se utiliza filesysten para enviar la informacion al archivo db 
const archivo='./db/data.json'
fs.writeFileSync(archivo,JSON.stringify(data))
}

module.exports={
    guardarDB
}