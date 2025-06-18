// backend/models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
    pool: dbConfig.pool,
    dialectOptions: dbConfig.dialectOptions
  }
);

const {Usuario} = require('./usuario.model.js')
const {Juego} = require('./juego.model.js')
const {JuegoUsuario} = require('./juegoUsuario.model.js')

Usuario.belongsToMany(Juego, {
  through: JuegoUsuario,
  foreignKey: 'usuario_id'
});
Juego.belongsToMany(Usuario, {
  through: JuegoUsuario,
  foreignKey: 'juego_id'
});

module.exports = {
  sequelize,
  Sequelize,
  Usuario,
  Juego,
  JuegoUsuario
};