const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('city', {
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    city_name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'city',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "city_pkey",
        unique: true,
        fields: [
          { name: "city_id" },
        ]
      },
    ]
  });
};
