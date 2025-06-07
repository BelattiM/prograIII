const {Router} = require('express');
const {home} = require('../controllers/home/home.controller.js');
const pacientesRender = require('../controllers/home/pacientesRender.controller.js');
const validar = require('./../middlewares/validateJoi.js');
const pacienteSchema = require('../schemas/pacienteJoi.js');
const validarDniEmail = require('../middlewares/validarDniEmailPaciente.js');
const rutaHome = Router();

const validarIdPaciente = require('./../middlewares/validarIdPaciente');
const turnoSchema = require('./../schemas/turnoJoi.js');
const turnosRender = require('../controllers/home/turnosRender.controller.js');

rutaHome.get('/', home);
//rutas de pacientes
rutaHome.post('/pacienteCreado', validar(pacienteSchema, {modo: 'render'}), validarDniEmail({modo: 'render'}), pacientesRender.pacienteCreado)
rutaHome.get('/pacienteEliminado',pacientesRender.pacienteEliminadoRender)
rutaHome.get('/pacienteNotFound',pacientesRender.pacienteNotFound)
rutaHome.delete('/eliminarPaciente/:id',pacientesRender.pacienteEliminado);
//rutas de turnos
rutaHome.post('/turnoCreado',validar(turnoSchema, {modo: "render"}),validarIdPaciente({modo: "render"}),turnosRender.turnoCreado)
rutaHome.delete('/turnosPaciente/eliminarTurno/:id', turnosRender.turnoEliminado)
rutaHome.get('/turnosPaciente/:id', turnosRender.turnosPaciente)
rutaHome.get('/turnoEliminado', turnosRender.turnoEliminadoRender)

module.exports = rutaHome;






