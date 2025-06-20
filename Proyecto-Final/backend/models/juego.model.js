const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Juego = sequelize.define('Juego', {
        id: { 
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            primaryKey: true 
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

    return Juego;
};