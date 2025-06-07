const turnosRender = require('../controllers/home/turnosRender.controller.js');
const pacienteRender = require('./../controllers/home/pacientesRender.controller.js')

const validate = (schema, {modo = 'render'}={}) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, {abortEarly: false});
        if (error) {
            const errores = []
            error.details.forEach(e => {
                errores.push(e.message)
            });
            if (schema.type === 'paciente' ){
                if (modo === 'api'){
                    return res.status(400).json({ errores })
                }else{
                    return pacienteRender.pacienteError(req, res, errores)
                }
            }else{
                if (modo === 'api'){
                    return res.status(400).json({ errores })
                }else{
                    return turnosRender.turnoError(req, res, errores)
                }
            }
        }
        next();
    };
};

module.exports = validate;