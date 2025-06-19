'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('JuegoUsuarios', {
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      juego_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Juegos',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      estado: {
        type: Sequelize.ENUM('pendiente', 'completado', 'jugando'),
        allowNull: false
      },
      calificacion: {
        type: Sequelize.INTEGER,
        validate: { min: 1, max: 10 }
      },
      tiempoDeJuego: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('JuegoUsuarios');
  }
};
