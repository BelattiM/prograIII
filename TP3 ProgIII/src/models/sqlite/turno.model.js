const {Turno} = require('../sqlite/entities/turno.entity.js');

const listar = async() =>{
    return await Turno.findAll();
};
const crear = async(turnoData) =>{
    return await Turno.create(turnoData);
};
const borrar = async(id)=>{
    const turno = await Turno.findByPk(id);
    if (!turno) return null;
    return await turno.destroy();
}
const actualizar = async(id, turno)=>{
    const turnoActualizar = await Turno.findByPk(id);
    if (!turnoActualizar) return null;
    return await turnoActualizar.update(turno);
}
const buscarPorIdPaciente = async (id_paciente) => {
    const turnos = await Turno.findAll({
        where: { id_paciente }
    });
    if (!turnos) return null;
    return turnos
};
module.exports = {
    listar,
    crear,
    borrar,
    actualizar,
    buscarPorIdPaciente
}