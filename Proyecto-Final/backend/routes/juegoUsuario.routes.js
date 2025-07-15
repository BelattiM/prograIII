const {Router} = require('express');
const rutaJuegoUsuario = Router();
const juegoUsuarioController = require('./../controllers/juegoUsuario.controller');

rutaJuegoUsuario.get('/', juegoUsuarioController.listar)
rutaJuegoUsuario.get('/juego/:juego_id', juegoUsuarioController.getByIdJuego)
rutaJuegoUsuario.get('/usuario/:usuario_id', juegoUsuarioController.getByIdUsuario)
rutaJuegoUsuario.post('/', juegoUsuarioController.crear)
rutaJuegoUsuario.delete('/:usuario_id/:juego_id', juegoUsuarioController.borrar)
rutaJuegoUsuario.put('/:usuario_id/:juego_id', juegoUsuarioController.actualizar)

module.exports = rutaJuegoUsuario;