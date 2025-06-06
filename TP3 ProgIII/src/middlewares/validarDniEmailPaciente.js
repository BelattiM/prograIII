const pacientesModel = require('./../models/sqlite/paciente.model')
const pacienteRender = require('./../controllers/home/pacientesRender.controller.js')

function validarDniEmail({modo = 'render'}={}) {
    return async function (req, res, next) {
        const { dni, email } = req.body;
        const pacienteDni = await pacientesModel.buscarPorDNI(dni);
        const pacienteEmail = await pacientesModel.buscarPorEmail(email);
        const errores = []

        if(pacienteDni) {
            errores.push('Ya existe un paciente con este DNI' )
            if (modo === 'api'){
                return res.status(400).json({ errores })
            }else{
                return pacienteRender.pacienteError(req, res, errores)
            }
        }
        if(pacienteEmail) {
            errores.push('Ya existe un paciente con este Email' )
            if (modo === 'api'){
                return res.status(400).json({ errores })
            }else{
                return pacienteRender.pacienteError(req, res, errores)
            }
        }
        next();
    };
}

module.exports = validarDniEmail;
