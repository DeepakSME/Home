const initModels = require('../models/init-models');
const { Sequelize } = require('sequelize');
const pg = require('pg')

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'ep-weathered-dew-52172418-pooler.us-east-1.postgres.vercel-storage.com',
  port: 5432,
  username: 'default',
  password: 't2ehyPsq4rBW',
  database: 'verceldb',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // You may need to adjust this depending on your PostgreSQL server setup
    },
  },
});

const models = initModels(sequelize);
const Category = models.category;

const list = async (req, res) => {
  try {
    let result = await Category.findAll();
    res.status(200).json(result);
  } catch (e) {
    console.error('Error in list function:', e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  list,
};
