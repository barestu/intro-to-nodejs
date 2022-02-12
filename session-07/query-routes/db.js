const Pool = require('pg').Pool;

const db = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'belajar',
});

module.exports = db;
