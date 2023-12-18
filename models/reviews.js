const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reviews', {
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_review_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reviewer_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reviewer_img_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    designation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    serivce_used: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quality: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    schedule: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    collabration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    review_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reviews',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "reviews_pkey",
        unique: true,
        fields: [
          { name: "review_id" },
        ]
      },
    ]
  });
};
