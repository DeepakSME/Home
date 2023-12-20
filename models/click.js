const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('click', {
    click_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    analytics_click_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    click_ip: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'click',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "click_pkey",
        unique: true,
        fields: [
          { name: "click_id" },
        ]
      },
    ]
  });
};
