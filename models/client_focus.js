const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_focus', {
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_focus_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    client_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    percentage: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'client_focus',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "client_focus_pkey",
        unique: true,
        fields: [
          { name: "client_id" },
        ]
      },
    ]
  });
};
