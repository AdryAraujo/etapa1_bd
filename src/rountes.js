const express = require('express')
const rounter = express.Router()

const usuarioController = require('./controllers/usuarioController.js')

rounter.get('/buscarUsuarios', usuarioController.buscarTodos)
rounter.get('/buscarUsuario/:cpf', usuarioController.buscarUm)
rounter.post('/inserirUsuario', usuarioController.inserir)

module.exports = rounter;
