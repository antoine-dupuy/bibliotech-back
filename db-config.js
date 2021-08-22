// we require dotenv module, call config and make available dotenv in a variable
require('dotenv').config();
const mysql = require('mysql2');

// we setup the connection with the environment variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = connection;