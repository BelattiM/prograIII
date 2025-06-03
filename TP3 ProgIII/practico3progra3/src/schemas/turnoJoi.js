const Joi = require('joi');

const turnoSchema = Joi.object({
    id_paciente: Joi.number().integer().required().messages({
        'any.required': 'El ID del paciente es obligatorio',
        'number.base': 'El ID del paciente debe ser un número'
    }),
    estado: Joi.valid('cancelado', 'completado', 'pendiente').required().messages({
        'any.only': 'El estado debe ser "cancelado", "completado" o "pendiente"',
    }),
    hora: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required().messages({
        'string.pattern.base': 'La hora debe tener formato HH:MM',
        'any.required': 'La hora del turno es obligatoria'
    }),
    fecha: Joi.string().pattern(/^\d{2}-\d{2}-\d{4}$/).required().messages({
        'string.pattern.base': 'La fecha debe tener formato DD-MM-YYYY',
        'any.required': 'la fecha del turno es obligatoria'
    })
});

module.exports = turnoSchema;