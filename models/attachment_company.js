const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attachment_company', {
    attachment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    tableName: 'attachment_company',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "attachment_company_pkey",
        unique: true,
        fields: [
          { name: "attachment_id" },
        ]
      },
    ]
  });
};
