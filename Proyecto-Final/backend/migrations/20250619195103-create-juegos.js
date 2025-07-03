'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Juegos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      plataforma: {
        type: Sequelize.ENUM('PC', 'XBOX', 'PlayStation', 'Otro'),
        allowNull: false
      },
      genero: {
        type: Sequelize.ENUM('Accion', 'Aventura', 'RPG (Juegos de rol)', 'Estrategia', 'Deportes', 'Plataformas', 'Otro'),
        allowNull: false
      },
      linkwiki:{
        type: Sequelize.STRING,
        allowNull:true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Juegos');
  }
};
