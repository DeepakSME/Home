const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Country', {
    Country_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Country_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Country_phone_code: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Country',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Country_pkey",
        unique: true,
        fields: [
          { name: "Country_Id" },
        ]
      },
    ]
  });
};
