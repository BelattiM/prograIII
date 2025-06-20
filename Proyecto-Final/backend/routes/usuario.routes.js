const {Router} = require('express');
const rutaUsuarios = Router();
const usuarioController = require('./../controllers/usuario.controller');

rutaUsuarios.get('/', usuarioController.listar)
rutaUsuarios.get('/:id', usuarioController.getById)
rutaUsuarios.post('/', usuarioController.crear)
rutaUsuarios.delete('/:id', usuarioController.borrar)
rutaUsuarios.put('/:id', usuarioController.actualizar)

module.exports = rutaUsuarios;