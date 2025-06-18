const {sequelize} = require('./../models/index');
const {DataTypes} = require('sequelize');


const Juego = sequelize.define('Juego', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    plataforma:{
        type: DataTypes.ENUM('PC', 'XBOX', 'PlayStation', 'Otro'),
        allowNull: false
    },
    genero: {
        type: DataTypes.ENUM('Accion', 'Aventura', 'RPG (Juegos de rol)', 'Estrategia', 'Deportes', 'Plataformas', 'Otro'),
        allowNull: false
    }
});

module.exports = {Juego};