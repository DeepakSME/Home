const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('service_focus', {
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    service_focus_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    percentage: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'service_focus',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "service_focus_pkey",
        unique: true,
        fields: [
          { name: "service_id" },
        ]
      },
    ]
  });
};
