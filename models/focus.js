const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('focus', {
    focus_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_focus_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    industry_focus_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    service_focus_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'focus',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "focus_pkey",
        unique: true,
        fields: [
          { name: "focus_id" },
        ]
      },
    ]
  });
};
