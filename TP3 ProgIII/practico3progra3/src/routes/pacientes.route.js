const {Router} = require('express');
const pacientesController = require('../controllers/API/pacientes.controller.js')
const rutaPacientes = Router();
const pacienteSchema = require('./../schemas/pacienteJoi.js')
const validar = require('./../middlewares/validateJoi.js')

rutaPacientes.get('/', pacientesController.list);
rutaPacientes.get('/pacienteCreado', pacientesController.pacienteCreado);
rutaPacientes.get('/pacienteEliminado', pacientesController.pacienteEliminado);
rutaPacientes.post('/',validar(pacienteSchema),pacientesController.create);
rutaPacientes.put('/:id',pacientesController.update);
rutaPacientes.delete('/:id',pacientesController.delete);
rutaPacientes.get('/:id', pacientesController.getById);

module.exports = rutaPacientes;