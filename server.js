//usando o express para configurar o servidor
const e = require("express")
const express = require("express")
const server = express()

//configurando arquivos estaticos
server.use(express.static("Public"))

//criando uma rota /
//capturo o pedido para responder
server.get("/",function(req, res){
    return res.sendFile(__dirname + "/index.html")
})

server.get("/ideias",function(req, res){
    return res.sendFile(__dirname + "/ideias.html")
})

//ligando o servidor
server.listen(3000)