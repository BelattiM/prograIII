'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        username: 'ClasiCK',
        email: 'ramiro@gmail.com',
        password: '1111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'anita<3',
        email: 'anapau@gmail.com',
        password: '2222',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Swer',
        email: 'teobela@gmail.com',
        password: '3333',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Tischhhh',
        email: 'facu@gmail.com',
        password: '4444',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
