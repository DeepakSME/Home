const initModels = require('../models/init-models');
const pg = require('pg')
const getSequelizeInstance = require('../config/db_config');
const environment = process.env.NODE_ENV || 'development';
const sequelize = getSequelizeInstance(environment);



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
