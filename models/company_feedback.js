const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company_feedback', {
    feedback_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    feedback: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'company_feedback',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "company_feedback_pkey",
        unique: true,
        fields: [
          { name: "feedback_id" },
        ]
      },
    ]
  });
};
