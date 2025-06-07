const {DataTypes} = require('sequelize');
const {sequelize} = require('./../config/db.js');
const {Paciente} = require('./paciente.entity.js');

const Turno = sequelize.define('Turno', {
    id_turno: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_paciente: {
        type: DataTypes.INTEGER,
        allowNull : false,
        references :{
            model : Paciente,
            key :  `id`
        }
    },
    estado:{
        type: DataTypes.ENUM('pendiente', 'completado', 'cancelado'),
        allowNull: false
    },
    hora:{ 
        type: DataTypes.TEXT,
        allowNull:false
    },
    fecha:{
        type: DataTypes.TEXT,
        allowNull:false
    }
});
Paciente.hasMany(Turno, {
    foreignKey: 'id_paciente',
    as: 'turnos',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Turno.belongsTo(Paciente, {
    foreignKey: 'id_paciente',
    as: 'paciente'
});

module.exports = {Turno};