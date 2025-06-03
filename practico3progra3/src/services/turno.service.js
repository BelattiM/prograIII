const {findTurnosByIdPaciente} = require('../models/sqlite/turno.model.js');
const {cancelarTrunoById} = require('../models/sqlite/turno.model.js');


///CONSULTAR TURNOS POR IDENTIFICADOR
const getTurnosPaciente = async (idPaciente)=>{
    const turnos = await findTurnosByIdPaciente(idPaciente)
    return turnos;
}

/// CANCELAR UN TURNO
const cancelarTurno = async (idPaciente)=>{
    const cancelado = await cancelarTrunoById(idPaciente);
    return cancelado;
}



module.exports = {
    getTurnosPaciente,
    cancelarTurno
}