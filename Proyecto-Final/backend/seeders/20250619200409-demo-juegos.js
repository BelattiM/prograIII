'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Juegos', [
      {
        titulo: 'Dead Cells',
        plataforma: 'PC',
        genero: 'Aventura',
        linkwiki: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Balatro',
        plataforma: 'PC',
        genero: 'Estrategia',
        linkwiki: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Devil May Cry 5',
        plataforma: 'PlayStation',
        genero: 'Accion',
        linkwiki: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Rocket League',
        plataforma: 'PC',
        genero: 'Deportes',
        linkwiki: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'The Sims 4',
        plataforma: 'XBOX',
        genero: 'Otro',
        linkwiki: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Juegos', null, {});
  }
};
