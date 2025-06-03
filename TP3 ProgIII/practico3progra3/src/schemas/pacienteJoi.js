const Joi = require('joi');

const pacienteSchema = Joi.object({
    dni: Joi.number().integer().required().messages({
        'any.required': 'El DNI es obligatorio',
        'number.base': 'El DNI debe ser un número'
    }),
    nombre: Joi.string().min(2).required().messages({
        'string.base': 'El nombre debe ser un texto',
        'string.min': 'El nombre debe tener al menos 2 caracteres',
        'any.required': 'El nombre es obligatorio'
    }),
    apellido: Joi.string().min(2).required().messages({
        'string.base': 'El apellido debe ser un texto',
        'string.min': 'El apellido debe tener al menos 2 caracteres',
        'any.required': 'El apellido es obligatorio'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'El email debe tener un formato válido',
        'any.required': 'El email es obligatorio'
    })
});

module.exports = pacienteSchema;