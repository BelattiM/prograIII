const {Router} = require('express');
const {getTurnosForIdPaciente} = require('../controllers/API/turnos.controller.js');
const{deleteTurnoForIdTurno} = require('../controllers/API/turnos.controller.js')

const rutaTurnos = Router();

///CONSULTAER TURNOS POR IDENTIFICADOR
rutaTurnos.get("/:idPaciente", getTurnosForIdPaciente); // GET /api/v1/turnos/:idPaciente => LA RUTA VIENE DE SERVER.JS

/// CANCELAR UN TURNO
rutaTurnos.delete("/:idTurno", deleteTurnoForIdTurno) ///  DELETE /api/v1/turnos/:idTurno


module.exports = rutaTurnos
