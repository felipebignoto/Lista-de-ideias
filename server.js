//usando o express para configurar o servidor
const e = require("express")
const express = require("express")
const server = express()

//criando 
const ideas = [
    {
        img: "assets/img/coding.png",
        title: "Cursos de programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae possimus sit laudant",
        url: "#"
    },

    {
        img: "/assets/img/sport.png",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae possimus sit laudant",
        url: "#"
    },

    {
        img: "/assets/img/meditation.png",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae possimus sit laudant",
        url: "#"
    },

    {
        img: "/assets/img/karaoke.png",
        title: "Karaoke",
        category: "Diversão em família",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae possimus sit laudant",
        url: "#"
    },

    {
        img: "/assets/img/painting.png",
        title: "Pintura",
        category: "criatividade",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae possimus sit laudant",
        url: "#"
    },

    {
        img: "/assets/img/greeting-card.png",
        title: "Recorte",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae possimus sit laudant",
        url: "#"
    },

]

//configurando arquivos estaticos
server.use(express.static("Public"))

//configurando o numjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

//criando uma rota /
//capturo o pedido para responder
server.get("/", function (req, res) {
    const reverseIdeas = [...ideas].reverse()
    let lastIdeas = []

    for(let idea of reverseIdeas){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    }
    
    return res.render("index.html", { ideas :lastIdeas })
})

server.get("/ideias", function (req, res) {
    const reverseIdeas = [...ideas].reverse()
    return res.render("ideias.html", {ideas: reverseIdeas})
})

//ligando o servidor
server.listen(3000)