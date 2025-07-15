const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const JuegoUsuario = sequelize.define('JuegoUsuario', {
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Usuarios',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        juego_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Juegos',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        estado: {
            type: DataTypes.ENUM('pendiente', 'completado', 'jugando'),
            allowNull: false
        },
        calificacion: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 0,
                max: 10
            }
        },
        tiempoDeJuego: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    return JuegoUsuario;
};