const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('portfolio', {
    portfolio_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    key_clients: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    country: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Industry: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    audiance: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expertise: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    geographic_scope: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    upload_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'portfolio',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "portfolio_pkey",
        unique: true,
        fields: [
          { name: "portfolio_id" },
        ]
      },
    ]
  });
};
