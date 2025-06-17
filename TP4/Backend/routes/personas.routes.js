const express = require('express');
const rutaPersonas = express.Router();
const { getPersonas } = require('../controllers/personas.controller');

rutaPersonas.get('/personas', getPersonas);

module.exports = rutaPersonas;
