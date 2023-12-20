const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendors_payment', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vendor_Payment_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payment_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payment_methods: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vendors_payment',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "vendors_payment_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
