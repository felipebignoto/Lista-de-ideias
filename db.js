const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./Desenvolvimento_Web.db')

db.serialize(function(){

    //criar a tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)
    
    //inserir dados
    /*
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
        "assets/img/coding.png",
         "Cursos de programação",
         "Estudo",
         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae possimus sit laudant",
         "#"
    ]
    
    db.run(query,values, function(err){
        if(err) return console.log(err)

        console.log(this)
    })
    */
    

    //deletar
    /*
    db.run(`DELETE FROM ideas WHERE id = ?`, [5], function(err){
        if(err) return console.log(err)

        console.log("deletei",this)
    })
    */


    //consultar
    /*
    db.all(`SELECT * FROM ideas`, function(err, rows){
        if(err) return console.log(err)

        console.log(rows)
    })
    */
    
})

module.exports = db