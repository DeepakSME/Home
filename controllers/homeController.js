const initModels = require('../models/init-models')
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_devlopment', 'deepak', 'Note7@484', {
  host: 'localhost',
  dialect: 'postgres', // or other dialects such as 'postgres', 'sqlite', 'mssql', etc.
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