const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Usuario = sequelize.define('Usuario', {
        id: { 
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true 
        },
        username: { 
            type: DataTypes.STRING, 
            unique: true, 
            allowNull: false 
        },
        email: { 
            type: DataTypes.STRING, 
            unique: true, 
            allowNull: false 
        },
        password: { 
            type: DataTypes.STRING, 
            allowNull: false 
        }
    });

    return Usuario;
};