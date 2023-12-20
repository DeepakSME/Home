'use strict';
const fs = require('fs');
const path = require('path');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    //  change the below query as per your choice and
    const sqlFilePath = path.join(__dirname, 'Vendor.sql');
    const sqlScript = fs.readFileSync(sqlFilePath, 'utf-8');
    await queryInterface.sequelize.query(sqlScript);
  },

  down: async (queryInterface, Sequelize) => {
    // Implement the down migration if needed
  },
};
