// importar a dependencia sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que ira fazer as operações no DB
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de DB para nossas app - usando comandos SQL
db.serialize( () => {
    // // criar tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         adress TEXT,
    //         adress2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)
    // //Inserir dados
    //     const query = `
    //         INSERT INTO places (
    //             image,
    //             name,
    //             adress,
    //             adress2,
    //             state,
    //             city,
    //             items
    //         ) VALUES (?,?,?,?,?,?,?);
    //         `
    //     const values = [
    //         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    //         "PaperSide",
    //         "Guilherme Gemballa, Jardim América",
    //         "n 260",
    //         "Santa Catarina",
    //         "Rio do Sul",
    //         "Resíduos Eletrônicos e Lâmpadas"
    //     ]

    //     function afterInsertData(err) {
    //         if(err) {
    //             return console.log(err)
    //         }
    //         console.log("Cadastrado com sucesso")
    //         console.log(this)
    //     }
    

    //    db.run(query, values, afterInsertData)
    //Consultar dados
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão os seus registros")
    //     console.log(rows)
    // })
    
    //Deletar dados
        // db.run(`DELETE FROM places WHERE id = ?`, [9], function(err) {
        //     if(err) {
        //         return console.log(err)
        //     }
        //     console.log("Registrados deletados com sucesso")
        // })

})