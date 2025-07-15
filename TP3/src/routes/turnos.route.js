const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller.js')
const rutaTurnos = Router();
const turnoSchema = require('./../schemas/turnoJoi.js')
const validar = require('./../middlewares/validateJoi.js')
const validarIdPaciente = require('./../middlewares/validarIdPaciente');
const turnosRender = require('../controllers/home/turnosRender.controller.js');

rutaTurnos.get('/', turnosController.list);

rutaTurnos.post('/',validar(turnoSchema, {modo: "api"}),validarIdPaciente({modo: "api"}), turnosController.create, turnosRender.turnoCreado);
rutaTurnos.put('/:id', turnosController.update);
rutaTurnos.delete('/:id', turnosController.delete);
rutaTurnos.get('/:id_paciente', turnosController.getByIdPaciente)

module.exports = rutaTurnos;