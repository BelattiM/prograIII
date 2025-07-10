'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('JuegoUsuarios', [
      {
        usuario_id: 2,
        juego_id: 1,
        estado: 'completado',
        calificacion: 9,
        tiempoDeJuego: 130,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        usuario_id: 3,
        juego_id: 5,
        estado: 'pendiente',
        calificacion: null,
        tiempoDeJuego: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        usuario_id: 4,
        juego_id: 4,
        estado: 'jugando',
        calificacion: 8,
        tiempoDeJuego: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        usuario_id: 5,
        juego_id: 2,
        estado: 'jugando',
        calificacion: 9,
        tiempoDeJuego: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        usuario_id: 2,
        juego_id: 3,
        estado: 'pendiente',
        calificacion: null,
        tiempoDeJuego: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        usuario_id: 5,
        juego_id: 3,
        estado: 'pendiente',
        calificacion: null,
        tiempoDeJuego: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('JuegoUsuarios', null, {});
  }
};
