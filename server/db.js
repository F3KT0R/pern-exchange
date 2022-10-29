const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "tibi123",
  host: "localhost",
  port: 5432,
  database: "pernexchange"
});

module.exports = pool;
