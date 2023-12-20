const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('views', {
    view_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    analytics_view_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    viewer_ip: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'views',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "views_pkey",
        unique: true,
        fields: [
          { name: "view_id" },
        ]
      },
    ]
  });
};
