const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Vera2359',
  database: 'expensetracker'
});

module.exports = connection;