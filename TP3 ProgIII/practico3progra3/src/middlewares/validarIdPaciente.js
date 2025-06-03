const pacientesModel = require('./../models/sqlite/paciente.model')

function validarPaciente() {
    return async function (req, res, next) {
        const { id_paciente } = req.body;
        if (!id_paciente) {
            return res.status(400).json({ message: 'Falta el id del paciente' });
        }
        const paciente = await pacientesModel.buscarPorId(id_paciente);
        if (!paciente) {
            return res.status(404).json({ message: 'Paciente no encontrado' });
        }
        next();
    };
}

module.exports = validarPaciente;