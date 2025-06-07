const {Router} = require('express');
const pacientesController = require('../controllers/API/pacientes.controller.js')
const rutaPacientes = Router();
const pacienteSchema = require('./../schemas/pacienteJoi.js')
const validar = require('./../middlewares/validateJoi.js');
const validarDniEmail = require('../middlewares/validarDniEmailPaciente.js');

rutaPacientes.get('/', pacientesController.list);

rutaPacientes.post('/',validar(pacienteSchema, {modo: 'api'}),validarDniEmail({modo: 'api'}),pacientesController.create);
rutaPacientes.put('/:id',pacientesController.update);
rutaPacientes.delete('/:id',pacientesController.delete);
rutaPacientes.get('/:id', pacientesController.getById);

module.exports = rutaPacientes;