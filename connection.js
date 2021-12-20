import mysql  from "mysql";

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo",
});
export default connection;