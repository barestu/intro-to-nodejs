const Pool = require('pg').Pool;

const db = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'todo',
});

module.exports = db;
