'use strict';

const bcrypt = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('123456', 10);
    const hashedPasswordAdmin = await bcrypt.hash('1111', 10)
    await queryInterface.bulkInsert('Usuarios', [
      {
        username: 'Administrador',
        email: 'eladmin@gmail.com',
        password: hashedPasswordAdmin,
        rol:'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'ClasiCK',
        email: 'ramiro@gmail.com',
        password: hashedPassword,
        rol:'usuario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'anita<3',
        email: 'anapau@gmail.com',
        password: hashedPassword,
        rol:'usuario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Swer',
        email: 'teobela@gmail.com',
        password: hashedPassword,
        rol:'usuario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Tischhhh',
        email: 'facu@gmail.com',
        password: hashedPassword,
        rol:'usuario',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
