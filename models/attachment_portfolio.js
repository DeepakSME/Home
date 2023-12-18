const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attachment_portfolio', {
    attachment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    portfolio_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    content_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'attachment_portfolio',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "attachment_portfolio_pkey",
        unique: true,
        fields: [
          { name: "attachment_id" },
        ]
      },
    ]
  });
};
