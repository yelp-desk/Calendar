const mysql = require('mysql');

let config = {
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'yelp'
}

module.exports = mysql.createConnection(config);
