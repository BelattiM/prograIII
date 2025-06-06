
const modelPacientes = require('./../../models/sqlite/paciente.model')
const modelTurnos = require('./../../models/sqlite/turno.model')
// controladores
const home = async (req, res) => {
    const pacientesSeq = await modelPacientes.listar();
    pacientesData = [];
    const turnosSeq = await modelTurnos.listar();
    turnosData = []
    
    turnosSeq.forEach(p => {
        p.toJSON();
        turnosData.push(p)
    });
    pacientesSeq.forEach(p => {
        p.toJSON();
        pacientesData.push(p)
    });
    res.render('index', { 
        title: 'Clinica Salud +',
        pacientes: pacientesData,
        turnos: turnosData
    });
}
module.exports = {
    home
}