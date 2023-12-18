const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category', {
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "category_pkey",
        unique: true,
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
};
