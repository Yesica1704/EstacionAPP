const mysql = require('mysql');
const util = require('util');

const dbConfig = {
  host: '127.0.0.2',
  user: 'root',
  password: '',
  database: 'estacionapp'
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    throw err;
  }
});

connection.query = util.promisify(connection.query);

module.exports = connection;
