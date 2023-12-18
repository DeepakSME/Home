const dbConfig = require('../config/db_config');


// ---------- Owner Model ---------- //
class OwnerModel extends dbConfig.Model {}

OwnerModel.init(
  {
    team_id: {
      type: dbConfig.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    company_profile_id: {
      type: dbConfig.DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    name: {
        type: dbConfig.DataTypes.STRING,
        allowNull: false,
      },
    designation: {
        type: dbConfig.DataTypes.STRING,
        allowNull: false,
      },
    profile_url: {
        type: dbConfig.DataTypes.STRING,
        allowNull: false,
      }
  },
  {
    sequelize: dbConfig.sequeliseTZ,
    modelName: 'owners',
    timestamps: false,
    underscored: true,
    freezeTableName: true,
  }
);

module.exports = OwnerModel;
