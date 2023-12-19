const initModels = require('../models/init-models')
const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('company', 'deepak', 'Note7@484', {
//   host: 'localhost',
//   dialect: 'postgres', // or other dialects such as 'postgres', 'sqlite', 'mssql', etc.
// });

const postgresURL = "postgres://default:t2ehyPsq4rBW@ep-weathered-dew-52172418-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb"
const sequelize = new Sequelize(postgresURL, {
    dialect: 'postgres', // Specify the dialect
    logging: false, // Disable logging of SQL queries (optional)
  });

const models = initModels(sequelize);
const Category = models.category;


const list = async (req, rest) => {

    try{
        //---------- insert data ----------//
        // let insertData = await CategoryModel.create({
        //     category_name: "Web Devlopment"
        // })

        //---------- Update data ----------//
        // let dataUpdate = await CategoryModel.update({
        //     category_name:'code Improvel'
        // },
        // {
        //     where:{category_id:101}
        // })

        //---------- delete data ----------//
        // let datadelete = await CategoryModel.destroy({
        //     where:{category_id:101}
        // })
        let result = await Category.findAll();
        // let result = {text:"data is coming from the server"}
            rest.status(200).json(result)
    }catch(e){
        rest.status(400).json(e)
    }
}

module.exports = {
    list
}