'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const [ companies ] = await queryInterface.sequelize.query('SELECT id FROM companies;');
    
    await queryInterface.bulkInsert('jobs', [
      {
        title: 'Desenvolvedor Fullstack Sr',
        description: 'Atuar com Nodejs + ReactJs',
        limit_date: new Date(),
        company_id: companies[0].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Desenvolvedor PHP Sr',
        description: 'Atuar com PHP e MySQL',
        limit_date: new Date(),
        company_id: companies[1].id,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jobs', null, {});
  }
};
