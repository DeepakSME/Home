const {Sequelize, Model, DataTypes} = require("sequelize");

let dbConfig = {
    db_name: 'company',
    db_user:'deepak',
    password:'Note7@484',
    cont_type:'postgres',
    port:'5432',
    host: 'localhost'
}


const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})



const sequeliseTZ = new Sequelize(dbConfig.db_name, dbConfig.db_user, dbConfig.password,{
    host:dbConfig.host,
    dialect: dbConfig.cont_type,
    port: dbConfig.port
})

const connection = {}

connection.Sequelize = Sequelize;
connection.sequeliseTZ = sequeliseTZ;
connection.Model = Model;
connection.DataTypes = DataTypes;

module.exports = connection



//migration script//

//npm install -g sequelize-cli

//npx sequelize-cli db:migrate --name master-migration


//npm install -g sequelize-auto

//sequelize-auto -o './models' -d database_devlopment -h localhost -u deepak -p 5432 -x Note7@484 -e postgres







