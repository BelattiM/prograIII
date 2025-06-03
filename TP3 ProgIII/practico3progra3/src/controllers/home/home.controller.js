
const modelPacientes = require('./../../models/sqlite/paciente.model')
// controladores
const home = async (req, res) => {
    const pacientesSeq = await modelPacientes.listar();
    pacientesData = [];
    pacientesSeq.forEach(p => {
        p.toJSON();
        pacientesData.push(p)
    });
    res.render('index', { 
        title: 'Clinica Salud +',
        pacientes: pacientesData
    });
}
module.exports = {
    home
}