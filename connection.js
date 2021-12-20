import mysql from "mysql";

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo",
});
connection.connect((err) => {
  if (err) {
    throw err;
  }
});
export default connection;
