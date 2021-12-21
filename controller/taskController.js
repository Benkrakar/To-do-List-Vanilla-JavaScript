const Task = require('../model/taskModel.js');
const { getTaskData } = require('../helpers/helpers.js');

async function getTasks(req, res) {
  try {
    const task = await Task.getAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(task));
  } catch (err) {
    throw err;
  }
}
async function getTask(req, res, id) {
  try {
    const task = await Task.getById(id);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(task));
  } catch (err) {
    throw err;
  }
}

async function createTask(req, res) {
  try {
    const body = await getTaskData(req);
    const { title, state } = JSON.parse(body);
    const data = {
      title,
      state,
    };
    const newtask = await Task.createTask(data);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(newtask));
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  createTask,
  getTasks,
  getTask,
};
