const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('location', {
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    location_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    company_location_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    country: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Phone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    google_map: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'location',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "location_pkey",
        unique: true,
        fields: [
          { name: "location_id" },
        ]
      },
    ]
  });
};
