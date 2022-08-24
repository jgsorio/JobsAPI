'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('candidates', [
      {
        name: 'Ana Paula',
        email: 'aninha_pdds@hotmail.com',
        bio: 'Olá, sou a Ana Paula e gosto de maltratar meu noivo Guilherme',
        phone: '11981242439',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Jose Guilherme',
        email: 'metaleiro.sp@hotmail.com',
        bio: 'Olá, sou o José Guilherme e sou muito maltratado pela minha noiva Ana Paula',
        phone: '11964652489',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('candidates', null, {});
  }
};
