const {sequelize} = require('./index');
const {DataTypes} = require('sequelize');
const {Usuario} = require('./usuario.model.js');
const {Juego} = require('./juego.model.js');

const JuegoUsuario = sequelize.define('JuegoUsuario', {
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull : false,
        references :{
            model : Usuario,
            key :  `id`
        }
    },
    idJuego: {
        type: DataTypes.INTEGER,
        allowNull : false,
        references :{
            model : Juego,
            key :  `id`
        }
    },
    estado:{
        type: DataTypes.ENUM('pendiente', 'completado', 'jugando'),
        allowNull: false
    },
    calificacion:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            min: 1,
            max: 10
        }
    },
    tiempoDeJuego:{ 
        type: DataTypes.INTEGER
    }
});

module.exports = {JuegoUsuario};