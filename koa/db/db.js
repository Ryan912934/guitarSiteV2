const { Pool } = require("pg");

const db = new Pool({
  host: "localhost",
  port: 5432,
  database: "guitar_site",
  user: "postgres",
  password: "password",
});

module.exports = db;
