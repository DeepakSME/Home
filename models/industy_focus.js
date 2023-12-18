const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('industy_focus', {
    industry_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    industry_focus_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    industry_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    percentage: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'industy_focus',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "industy_focus_pkey",
        unique: true,
        fields: [
          { name: "industry_id" },
        ]
      },
    ]
  });
};
