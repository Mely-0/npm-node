const http = require('http');
//valor de la ip
const host = '127.0.0.1';
const port= '8080'
const fs= require ('fs')
const json= require('./data.json');

const server = http.createServer((req,res)=>{
//indicar el tipo de respuesta
res.writeHead(200, {'content-type':'application/json'})
fs.readFile('./data.json', (error , data)=>{
    if(error){
        res.writeHead(404)
        res.write('archivo no encontrado')
    }else{
        res.write(data)
    }
    res.end()
})
})
server.listen(port, host,()=>{
    console.log("servidor funcionaqndo en ", host , port)
})