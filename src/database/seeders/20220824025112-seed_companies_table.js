'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [
      {
        name: "Facebook (Meta)",
        email: "contato@facebook.com.br",
        website: "https://facebook.com.br",
        bio: "Empresa de Tecnologia localizada no Vale do Silicio",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Google",
        website: "https://google.com.br",
        email: "contato@google.com.br",
        bio: "Empresa de Grande Porte localizada no Vale do Silicio, responsável pelo maior buscador web do mundo!",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {});
  }
};
