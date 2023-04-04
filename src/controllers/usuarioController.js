const usuarioService = require('../services/usuarioService.js');

module.exports = {
    buscarTodos: async(req, res) =>{
        let json = {Error: "", result: []}

        let usuarios = await usuarioService.buscarTodos()

        for(let i in usuarios){
            json.result.push({
                cpf: usuarios[i].cpf,
                nome: usuarios[i].nome,
                data_nascimento: usuarios[i].data_nascimento
            })
            
        }
        res.json(json)
    },

    buscarUm: async(req, res) =>{
        let json = {error: '', result: {}}

        let cpf = req.params.cpf
        let usuario = await usuarioService.buscarUm(cpf)

        if(usuario){
            json.result = usuario
        }

        res.json(json)
    },

    inserir: async(req, res) =>{
        let json = {error: '', result: {}}

        let cpf = req.body.cpf
        let nome = req.body.nome
        let data_nascimento = req.body.data_nascimento

        if(cpf && nome && data_nascimento ){
            let usuariocpf = await usuarioService.inserir(cpf, nome, data_nascimento)
            json.result = {
                cpf: usuariocpf,
                nome,
                data_nascimento
            }
        }else{
            json.error = 'Campos não enviados'
        }

        res.json(json)
    }

}