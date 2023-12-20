// db_config.js

const { Sequelize } = require('sequelize');

module.exports = function getSequelizeInstance(environment) {
  const config = {
    development: {
      dialect: 'postgres',
      host: 'ep-weathered-dew-52172418-pooler.us-east-1.postgres.vercel-storage.com',
      port: 5432,
      username: 'default',
      password: 't2ehyPsq4rBW',
      database: 'verceldb'
    },
    // Add configurations for other environments if needed
  };

  const sequelizeConfig = config[environment] || config.development;

  return new Sequelize({
    dialect: sequelizeConfig.dialect,
    host: sequelizeConfig.host,
    port: sequelizeConfig.port,
    username: sequelizeConfig.username,
    password: sequelizeConfig.password,
    database: sequelizeConfig.database,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // You may need to adjust this depending on your PostgreSQL server setup
      },
    },
  });
};
