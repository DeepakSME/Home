const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendors', {
    vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vendor_email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vendor_password: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vendors',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "vendors_pkey",
        unique: true,
        fields: [
          { name: "vendor_id" },
        ]
      },
    ]
  });
};
