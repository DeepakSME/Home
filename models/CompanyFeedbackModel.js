const dbConfig = require('../config/db_config');


// ---------- Company Feedback Model ---------- //
class CompanyFeedbackModel extends dbConfig.Model {}

CompanyFeedbackModel.init(
  {
    feedback_id: {
      type: dbConfig.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    feedback: {
      type: dbConfig.DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    company_id: {
        type: dbConfig.DataTypes.INTEGER,
        allowNull: false,
      }
  },
  {
    sequelize: dbConfig.sequeliseTZ,
    modelName: 'company_feedback',
    timestamps: false,
    underscored: true,
    freezeTableName: true,
  }
);

module.exports = CompanyFeedbackModel;
