const personas = require('../models/personas.model');

const getPersonas = (req, res) => {
    res.json(personas);
};

module.exports = { getPersonas };