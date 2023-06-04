//usando o express para configurar o servidor
const express = require("express")
const server = express()

const db = require("./db")

//criando 
/*
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
*/

//configurando arquivos estaticos
server.use(express.static("Public"))

//habilitação uso do rew.body
server.use(express.urlencoded({extended: true}))

//configurando o numjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

//criando uma rota /
//capturo o pedido para responder
server.get("/", function (req, res) {

    db.all(`SELECT * FROM ideas`, function (err, rows) {
        if (err){
            console.log(err)
            return res.send("Erro no banco de dados!")
        }

        const reverseIdeas = [...rows].reverse()
        let lastIdeas = []

        for (let idea of reverseIdeas) {
            if (lastIdeas.length < 2) {
                lastIdeas.push(idea)
            }
        }

        return res.render("index.html", { ideas: lastIdeas })
    })


})

server.get("/ideias", function (req, res) {

    db.all(`SELECT * FROM ideas`, function (err, rows) {
        if (err){
            console.log(err)
            return res.send("Erro no banco de dados!")
        }

        const reverseIdeas = [...rows].reverse()
        return res.render("ideias.html", { ideas: reverseIdeas })
    })
})

server.post("/",function(req, res){
    
    //INSERINDO DADOS NA TABELA
    const query = `
        INSERT INTO ideas(
            image,
            title,
            category,
            description,
            link
        ) VALUES(?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link,
    ]
    
    db.run(query,values, function(err){
        if (err){
            console.log(err)
            return res.send("Erro no banco de dados!")
        }

        return res.redirect("/ideias")
    })
})

//ligando o servidor
server.listen(3000)