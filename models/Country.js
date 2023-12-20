const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country', {
    country_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    country_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    country_phone_code: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'country',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "country_pkey",
        unique: true,
        fields: [
          { name: "country_Id" },
        ]
      },
    ]
  });
};


// changing name