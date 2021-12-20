const Task = require("../model/taskModel.js");

async function getTasks(req, res) {
  try {
    const task = await Task.getAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(task));
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getTasks,
};
