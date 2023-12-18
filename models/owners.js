const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('owners', {
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_profile_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    designation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_url: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'owners',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "owners_pkey",
        unique: true,
        fields: [
          { name: "team_id" },
        ]
      },
    ]
  });
};
