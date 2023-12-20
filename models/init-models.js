var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _analytics = require("./analytics");
var _attachment_company = require("./attachment_company");
var _attachment_portfolio = require("./attachment_portfolio");
var _category = require("./category");
var _city = require("./city");
var _click = require("./click");
var _client_focus = require("./client_focus");
var _company_feedback = require("./company_feedback");
var _company_profile = require("./company_profile");
var _country = require("./country");
var _focus = require("./focus");
var _industy_focus = require("./industy_focus");
var _location = require("./location");
var _owners = require("./owners");
var _portfolio = require("./portfolio");
var _reviews = require("./reviews");
var _service_focus = require("./service_focus");
var _state = require("./state");
var _sub_category = require("./sub_category");
var _vendors = require("./vendors");
var _vendors_payment = require("./vendors_payment");
var _views = require("./views");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var analytics = _analytics(sequelize, DataTypes);
  var attachment_company = _attachment_company(sequelize, DataTypes);
  var attachment_portfolio = _attachment_portfolio(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var city = _city(sequelize, DataTypes);
  var click = _click(sequelize, DataTypes);
  var client_focus = _client_focus(sequelize, DataTypes);
  var company_feedback = _company_feedback(sequelize, DataTypes);
  var company_profile = _company_profile(sequelize, DataTypes);
  var country = _country(sequelize, DataTypes);
  var focus = _focus(sequelize, DataTypes);
  var industy_focus = _industy_focus(sequelize, DataTypes);
  var location = _location(sequelize, DataTypes);
  var owners = _owners(sequelize, DataTypes);
  var portfolio = _portfolio(sequelize, DataTypes);
  var reviews = _reviews(sequelize, DataTypes);
  var service_focus = _service_focus(sequelize, DataTypes);
  var state = _state(sequelize, DataTypes);
  var sub_category = _sub_category(sequelize, DataTypes);
  var vendors = _vendors(sequelize, DataTypes);
  var vendors_payment = _vendors_payment(sequelize, DataTypes);
  var views = _views(sequelize, DataTypes);


  return {
    SequelizeMeta,
    analytics,
    attachment_company,
    attachment_portfolio,
    category,
    city,
    click,
    client_focus,
    company_feedback,
    company_profile,
    country,
    focus,
    industy_focus,
    location,
    owners,
    portfolio,
    reviews,
    service_focus,
    state,
    sub_category,
    vendors,
    vendors_payment,
    views,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
