CREATE TABLE "company_profile" (
  "company_id" integer,
  "vendor_id" integer,
  "attachment_company_id" integer,
  "company_name" text,
  "company_url" text,
  "category" text,
  "claimed" Bool,
  "overview" text,
  "team_size" text,
  "founding_year" integer,
  "hourly_rate" text,
  "languages" text,
  "pan" Bool,
  "adhar" Bool,
  "gst_number" Bool,
  "certification_of_incorpation" Bool,
  "portfolio_id" integer,
  "facebook" text,
  "linkedin" text,
  "twitter" text,
  "date_enrolled" date,
  "location_id" integer,
  "review_id" integer,
  "focus_id" integer,
  "team_id" integer,
  "feedback_id" integer,
  "analytics_id" integer,
  PRIMARY KEY ("company_id")
);

CREATE TABLE "attachment_company" (
  "attachment_id" integer,
  "content_type" text,
  "url" text,
  PRIMARY KEY ("attachment_id")
);

CREATE TABLE "portfolio" (
  "portfolio_id" integer,
  "company_name" text,
  "key_clients" text,
  "city" text,
  "country" text,
  "Industry" text,
  "audiance" text,
  "expertise" text,
  "geographic_scope" text,
  "start_date" date,
  "end_date" date,
  "upload_date" date,
  PRIMARY KEY ("portfolio_id")
);

CREATE TABLE "attachment_portfolio" (
  "attachment_id" integer,
  "portfolio_id" integer,
  "content_type" text,
  "url" text,
  PRIMARY KEY ("attachment_id")
);

CREATE TABLE "reviews" (
  "review_id" integer,
  "company_review_id" integer,
  "reviewer_name" text,
  "reviewer_img_url" text,
  "designation" text,
  "serivce_used" text,
  "description" text,
  "budget" Int,
  "quality" Int,
  "schedule" Int,
  "collabration" Int,
  "review_date" date,
  PRIMARY KEY ("review_id")
);

CREATE TABLE "location" (
  "location_id" integer,
  "location_type" text,
  "company_location_id" integer,
  "address" text,
  "city" text,
  "state" text,
  "country" text,
  "Phone" text,
  "google_map" text,
  PRIMARY KEY ("location_id")
);

CREATE TABLE "focus" (
  "focus_id" integer,
  "client_focus_id" integer,
  "industry_focus_id" integer,
  "service_focus_id" integer,
  PRIMARY KEY ("focus_id")
);

CREATE TABLE "service_focus" (
  "service_id" integer,
  "service_focus_id" integer,
  "category_id" integer,
  "percentage" Int,
  PRIMARY KEY ("service_id")
);

CREATE TABLE "industy_focus" (
  "industry_id" integer,
  "industry_focus_id" integer,
  "industry_name" text,
  "percentage" Int,
  PRIMARY KEY ("industry_id")
);

CREATE TABLE "client_focus" (
  "client_id" integer,
  "client_focus_id" integer,
  "client_name" text,
  "percentage" Int,
  PRIMARY KEY ("client_id")
);

CREATE TABLE "owners" (
  "team_id" integer,
  "company_profile_id" integer,
  "name" text,
  "designation" text,
  "profile_url" text,
  PRIMARY KEY ("team_id")
);

CREATE TABLE "vendors" (
  "vendor_id" integer,
  "vendor_email" text,
  "vendor_password" text,
  "vendor_Payment_id" integer,
  PRIMARY KEY ("vendor_id")
);

CREATE TABLE "company_feedback" (
  "feedback_id" integer PRIMARY KEY,
  "feedback" Bool,
  "company_id" integer
);

CREATE TABLE "category" (
  "category_id" integer,
  "category_name" text,
  PRIMARY KEY ("category_id")
);

CREATE TABLE "sub_category" (
  "sub_category_id" integer,
  "category_id" integer,
  "sub_category_name" text,
  PRIMARY KEY ("sub_category_id")
);

CREATE TABLE "city" (
  "city_id" integer,
  "city_name" text,
  PRIMARY KEY ("city_id")
);

CREATE TABLE "country" (
  "country_Id" integer,
  "country_name" text,
  "country_phone_code" text,
  PRIMARY KEY ("country_Id")
);

CREATE TABLE "state" (
  "state_id" integer,
  "State_name" text,
  PRIMARY KEY ("state_id")
);

CREATE TABLE "vendors_payment" (
  "id" integer PRIMARY KEY,
  "vendor_Payment_id" integer,
  "payment_amount" int,
  "payment_methods" text,
  "created_at" date,
  "end_date" date
);

CREATE TABLE "analytics" (
  "id" integer PRIMARY KEY,
  "analytics_id" integer,
  "analytics_click_id" integer,
  "analytics_view_id" integer
);

CREATE TABLE "views" (
  "view_id" integer PRIMARY KEY,
  "analytics_view_id" integer,
  "viewer_ip" text
);

CREATE TABLE "click" (
  "click_id" integer PRIMARY KEY,
  "analytics_click_id" integer,
  "click_ip" text
);

-- ALTER TABLE "company_profile" ADD FOREIGN KEY ("vendor_id") REFERENCES "vendors" ("vendor_id");

-- ALTER TABLE "company_profile" ADD FOREIGN KEY ("attachment_company_id") REFERENCES "attachment_company" ("attachment_id");

-- ALTER TABLE "company_profile" ADD FOREIGN KEY ("portfolio_id") REFERENCES "portfolio" ("portfolio_id");

-- ALTER TABLE "company_profile" ADD FOREIGN KEY ("focus_id") REFERENCES "focus" ("focus_id");

-- ALTER TABLE "attachment_portfolio" ADD FOREIGN KEY ("portfolio_id") REFERENCES "portfolio" ("portfolio_id");

-- ALTER TABLE "reviews" ADD FOREIGN KEY ("company_review_id") REFERENCES "company_profile" ("review_id");

-- ALTER TABLE "location" ADD FOREIGN KEY ("company_location_id") REFERENCES "company_profile" ("location_id");

-- ALTER TABLE "focus" ADD FOREIGN KEY ("client_focus_id") REFERENCES "client_focus" ("client_focus_id");

-- ALTER TABLE "focus" ADD FOREIGN KEY ("industry_focus_id") REFERENCES "industy_focus" ("industry_focus_id");

-- ALTER TABLE "focus" ADD FOREIGN KEY ("service_focus_id") REFERENCES "service_focus" ("service_focus_id");

-- ALTER TABLE "service_focus" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("category_id");

-- ALTER TABLE "owners" ADD FOREIGN KEY ("company_profile_id") REFERENCES "company_profile" ("team_id");

-- ALTER TABLE "company_feedback" ADD FOREIGN KEY ("company_id") REFERENCES "company_profile" ("feedback_id");

-- ALTER TABLE "sub_category" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("category_id");

-- ALTER TABLE "vendors_payment" ADD FOREIGN KEY ("vendor_Payment_id") REFERENCES "vendors" ("vendor_Payment_id");

-- ALTER TABLE "analytics" ADD FOREIGN KEY ("analytics_id") REFERENCES "company_profile" ("analytics_id");

-- ALTER TABLE "views" ADD FOREIGN KEY ("analytics_view_id") REFERENCES "analytics" ("analytics_view_id");

-- ALTER TABLE "click" ADD FOREIGN KEY ("analytics_click_id") REFERENCES "analytics" ("analytics_click_id");
