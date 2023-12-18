const dbConfig = require('../config/db_config');


// ---------- Category Model ---------- //
class CategoryModel extends dbConfig.Model {}

CategoryModel.init(
  {
    category_id: {
      type: dbConfig.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: dbConfig.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dbConfig.sequeliseTZ,
    modelName: 'category',
    timestamps: false,
    underscored: true,
    freezeTableName: true,
  }
);

module.exports = CategoryModel;
