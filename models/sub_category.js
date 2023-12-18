const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sub_category', {
    sub_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sub_category_name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sub_category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sub_category_pkey",
        unique: true,
        fields: [
          { name: "sub_category_id" },
        ]
      },
    ]
  });
};
