const mysql = require('mysql');
import 'dotenv/config';

let connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
});
connection.connect((err) => {
  if (err) {
    throw err;
  }
});
module.exports = {
  connection,
};
