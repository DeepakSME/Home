const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('State', {
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    State_name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'State',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "State_pkey",
        unique: true,
        fields: [
          { name: "state_id" },
        ]
      },
    ]
  });
};
