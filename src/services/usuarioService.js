const { error } = require('console')
const db = require('../db')

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM usuarios', (error, results) => {
                if(error) { rejeitado(error); return;}
                else {
                    aceito(results)
                }
            })
        })
    },

    buscarUm: (cpf) => {
        return new Promise((aceito, rejeitado) => {
            db.query("SELECT * FROM usuarios WHERE cpf = ?", [cpf], (error, results) => {
                
                if(error) {  rejeitado(error); return;}
                try{
                    aceito(results[0])
                }
                catch{
                    aceito(false)
                }
            })
        })
    },

    inserir: (cpf, nome, data_nascimento) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO usuarios (cpf, nome, data_nascimento) VALUES (?, ?, ?)' , [cpf, nome, data_nascimento], (error, results) => {
                if(error) { rejeitado(error); return;}
                console.log(results)
                aceito(results.cpf)
            })
        })
    }

}