const dbConfig = require('../config/db_config');


// ---------- Vendor Model ---------- //
class VendorModel extends dbConfig.Model {}

VendorModel.init(
  {
    vendor_id: {
      type: dbConfig.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    vendor_email: {
      type: dbConfig.DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    vendor_password: {
        type: dbConfig.DataTypes.STRING,
        allowNull: false,
      }
  },
  {
    sequelize: dbConfig.sequeliseTZ,
    modelName: 'vendors',
    timestamps: false,
    underscored: true,
    freezeTableName: true,
  }
);

module.exports = VendorModel;
