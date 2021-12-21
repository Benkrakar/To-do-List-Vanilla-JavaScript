const { connection } = require('../database/connection.js');

function getAll() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM todo';
    connection.query(sql, function (err, tasks) {
      if (err) {
        throw err;
      }
      resolve(tasks);
    });
  });
}
function getById(id) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM todo WHERE  id = ${id}`;
    connection.query(sql, function (err, tasks) {
      if (err) {
        throw err;
      }
      resolve(tasks);
    });
  });
}
function deleteTask(id) {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM todo WHERE  id = ${id}`;
    connection.query(sql, function (err, tasks) {
      if (err) {
        throw err;
      }
      resolve(tasks);
    });
  });
}
function createTask(data) {
  return new Promise((resolve, reject) => {
    const newTask = { ...data };
    const sql = `INSERT INTO todo (title, state) VALUES ('${data.title}', '${data.state}')`;
    connection.query(sql, function (err, tasks) {
      if (err) {
        throw err;
      }
      resolve(newTask);
    });
  });
}

function updateTask(data, id) {
  return new Promise((resolve, reject) => {
    const newTask = { ...data };
    const sql = `UPDATE  todo SET  title='${data.title}', state='${data.state}' WHERE id= ${id} `;
    connection.query(sql, function (err, tasks) {
      if (err) {
        throw err;
      }
      resolve(newTask);
    });
  });
}
module.exports = {
  getAll,
  getById,
  createTask,
  updateTask,
  deleteTask,
};
