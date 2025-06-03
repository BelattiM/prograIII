const { RelationshipType } = require('sequelize/lib/errors/database/foreign-key-constraint-error');
const {Turno} = require('../sqlite/entities/turno.entity.js');


const getTurnoModel = () =>{
    const tur = Turno.findAll();
    return tur;
}

///CONSULTAS TURNOS POR IDENTIFICADOR
const findTurnosByIdPaciente = async (idPaciente) =>{
    const turnos = await Turno.findAll({
        where : {
            id_paciente : idPaciente
        }
    });
    if (turnos) {
        console.log("Turnos encontrados" + turnos);
        return turnos;
    }
    else{
        console.log("No se encontraron turnos del paciente");
    }
}

/// CANCELAR UN TURNO
const cancelarTrunoById = async (idTurno) =>{

    const cambiar = Turno.findOne({
        where: {
            id_turno : idTurno
        }
    })
    if (!cambiar) {
        return false;
    }
    if (cambiar.estado === 'pendiente')  {
        Turno.update(
            {estado : 'cancelado'},
            {where: {id_turno : idTurno}}   
        )
        return true;
    } 
    else{
        return false;
    }
}








module.exports = {
    getTurnoModel,
    findTurnosByIdPaciente,
    cancelarTrunoById
}