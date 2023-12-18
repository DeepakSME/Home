const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    database: 'company',
    user: 'deepak',
    password : 'Note7@484'
  });
