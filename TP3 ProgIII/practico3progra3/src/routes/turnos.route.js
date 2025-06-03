const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller.js')
const rutaTurnos = Router();
const turnoSchema = require('./../schemas/turnoJoi.js')
const validar = require('./../middlewares/validateJoi.js')
const validarIdPaciente = require('./../middlewares/validarIdPaciente')

rutaTurnos.get('/', turnosController.list);
rutaTurnos.get('/turnoCreado', turnosController.turnoCreado);
rutaTurnos.post('/',validar(turnoSchema),validarIdPaciente(), turnosController.create);
rutaTurnos.put('/:id', turnosController.update);
rutaTurnos.delete('/:id', turnosController.delete);
rutaTurnos.get('/:id_paciente', turnosController.getByIdPaciente)

module.exports = rutaTurnos;