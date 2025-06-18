const pacientesModel = require('./../models/sqlite/paciente.model')
const turnosRender = require ('./../controllers/home/turnosRender.controller')

function validarPaciente({modo = 'render'}={}) {
    return async function (req, res, next) {
        const { id_paciente } = req.body;
        const errores = []
        
        if (!id_paciente) {
            errores.push('Falta el id del paciente')
            if (modo === 'api'){
                return res.status(400).json({ errores })
            }else{
                return turnosRender.turnoError(req, res, errores)
            }
        }
        const paciente = await pacientesModel.buscarPorId(id_paciente);
        if (!paciente) {
            errores.push('Paciente no encontrado')
            if (modo === 'api'){
                return res.status(400).json({ errores })
            }else{
                return turnosRender.turnoError(req, res, errores)
            }        
        }
        next();
    };
}

module.exports = validarPaciente;