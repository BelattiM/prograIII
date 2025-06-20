const {Router} = require('express');
const rutaJuegos = Router();
const juegoController = require('./../controllers/juego.controller');

rutaJuegos.get('/', juegoController.listar)
rutaJuegos.get('/:id', juegoController.getById)
rutaJuegos.post('/', juegoController.crear)
rutaJuegos.delete('/:id', juegoController.borrar)
rutaJuegos.put('/:id', juegoController.actualizar)

module.exports = rutaJuegos;