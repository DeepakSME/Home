const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company_profile', {
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    attachment_company_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    company_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    company_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    claimed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    overview: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    team_size: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    founding_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hourly_rate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    languages: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pan: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    adhar: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    gst_number: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    certification_of_incorpation: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    portfolio_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    facebook: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    linkedin: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    twitter: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_enrolled: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    focus_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    feedback_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    analytics_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'company_profile',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "company_profile_pkey",
        unique: true,
        fields: [
          { name: "company_id" },
        ]
      },
    ]
  });
};
