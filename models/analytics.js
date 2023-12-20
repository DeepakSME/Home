const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('analytics', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    analytics_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    analytics_click_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    analytics_view_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'analytics',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "analytics_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
