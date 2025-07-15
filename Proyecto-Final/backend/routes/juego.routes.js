const {Router} = require('express');
const rutaJuegos = Router();
const juegoController = require('./../controllers/juego.controller');
const verificarToken = require('../middleware/verificarToken.middleware');
const soloAdmin = require('../middleware/admin.middleware');

rutaJuegos.get('/', juegoController.listar)
rutaJuegos.get('/:id', juegoController.getById)
rutaJuegos.post('/', verificarToken, soloAdmin, juegoController.crear)
rutaJuegos.delete('/:id', verificarToken, soloAdmin, juegoController.borrar)
rutaJuegos.put('/:id', verificarToken, soloAdmin, juegoController.actualizar)

module.exports = rutaJuegos;