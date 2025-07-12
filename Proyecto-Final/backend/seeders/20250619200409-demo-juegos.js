'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Juegos', [
      // Accion
      {
        titulo: 'Devil May Cry 5',
        plataforma: 'PlayStation',
        genero: 'Accion',
        linkwiki: 'https://devilmaycry.fandom.com/es/wiki/Devil_May_Cry_5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'DOOM Eternal',
        plataforma: 'PC',
        genero: 'Accion',
        linkwiki: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'God of War',
        plataforma: 'PlayStation',
        genero: 'Accion',
        linkwiki: 'https://godofwar.fandom.com/wiki/God_of_War',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Hades',
        plataforma: 'PC',
        genero: 'Accion',
        linkwiki: 'https://hades.fandom.com/wiki/Hades_Wiki',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Aventura
      {
        titulo: 'Dead Cells',
        plataforma: 'PC',
        genero: 'Aventura',
        linkwiki: 'https://deadcells.wiki.gg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Uncharted 4',
        plataforma: 'PlayStation',
        genero: 'Aventura',
        linkwiki: 'https://uncharted.fandom.com/wiki/Uncharted_4:_A_Thief%27s_End',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Tomb Raider',
        plataforma: 'PC',
        genero: 'Aventura',
        linkwiki: 'https://tombraider.fandom.com/wiki/Tomb_Raider_(2013)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Ori and the Blind Forest',
        plataforma: 'XBOX',
        genero: 'Aventura',
        linkwiki: 'https://oriandtheblindforest.fandom.com/wiki/Ori_and_the_Blind_Forest',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Estrategia
      {
        titulo: 'Balatro',
        plataforma: 'PC',
        genero: 'Estrategia',
        linkwiki: 'https://balatrogame.fandom.com/wiki/Balatro_Wiki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Civilization VI',
        plataforma: 'PC',
        genero: 'Estrategia',
        linkwiki: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'StarCraft II',
        plataforma: 'PC',
        genero: 'Estrategia',
        linkwiki: 'https://starcraft.fandom.com/wiki/StarCraft_II',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'XCOM 2',
        plataforma: 'PlayStation',
        genero: 'Estrategia',
        linkwiki: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Plataformas
      {
        titulo: 'Celeste',
        plataforma: 'PC',
        genero: 'Plataformas',
        linkwiki: 'https://celeste.fandom.com/wiki/Celeste',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Rayman Legends',
        plataforma: 'PC',
        genero: 'Plataformas',
        linkwiki: 'https://rayman.fandom.com/wiki/Rayman_Legends',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Crash Bandicoot N. Sane Trilogy',
        plataforma: 'PlayStation',
        genero: 'Plataformas',
        linkwiki: 'https://crashbandicoot.fandom.com/wiki/Crash_Bandicoot_N._Sane_Trilogy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'LittleBigPlanet 3',
        plataforma: 'XBOX',
        genero: 'Plataformas',
        linkwiki: 'https://littlebigplanet.fandom.com/wiki/LittleBigPlanet_3',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // RPG (Juegos de rol)
      {
        titulo: 'The Witcher 3',
        plataforma: 'PC',
        genero: 'RPG (Juegos de rol)',
        linkwiki: 'https://witcher.fandom.com/wiki/The_Witcher_3:_Wild_Hunt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Persona 5',
        plataforma: 'PlayStation',
        genero: 'RPG (Juegos de rol)',
        linkwiki: 'https://megamitensei.fandom.com/wiki/Persona_5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Divinity: Original Sin 2',
        plataforma: 'PC',
        genero: 'RPG (Juegos de rol)',
        linkwiki: 'https://divinity.fandom.com/wiki/Divinity:_Original_Sin_2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Final Fantasy XV',
        plataforma: 'XBOX',
        genero: 'RPG (Juegos de rol)',
        linkwiki: 'https://finalfantasy.fandom.com/wiki/Final_Fantasy_XV',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Deportes
      {
        titulo: 'Rocket League',
        plataforma: 'PC',
        genero: 'Deportes',
        linkwiki: 'https://rocketleague.fandom.com/wiki/Rocket_League_Wiki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'FIFA 23',
        plataforma: 'PlayStation',
        genero: 'Deportes',
        linkwiki: 'https://fifa.fandom.com/wiki/FIFA_23',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'NBA 2K24',
        plataforma: 'XBOX',
        genero: 'Deportes',
        linkwiki: 'https://nba2k.fandom.com/wiki/NBA_2K24',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'eFootball PES 2021',
        plataforma: 'PC',
        genero: 'Deportes',
        linkwiki: 'https://pes.fandom.com/wiki/PES_2021',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Otro
      {
        titulo: 'The Sims 4',
        plataforma: 'XBOX',
        genero: 'Otro',
        linkwiki: 'https://sims-fandom-com.translate.goog/wiki/The_Sims_4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Minecraft',
        plataforma: 'PC',
        genero: 'Otro',
        linkwiki: 'https://minecraft.fandom.com/wiki/Minecraft_Wiki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Among Us',
        plataforma: 'PC',
        genero: 'Otro',
        linkwiki: 'https://among-us.fandom.com/wiki/Among_Us',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Juego Aventura 1',
        plataforma: 'PlayStation',
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
