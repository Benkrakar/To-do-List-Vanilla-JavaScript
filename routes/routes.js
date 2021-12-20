const http = require('http');
const { getTasks, getTask } = require('../controller/taskController.js');
import 'dotenv/config';

const server = http.createServer((req, res) => {
  if (req.url == '/api/tasks') {
    getTasks(req, res);
  } else if (req.url.match(/\/api\/tasks\/\w+/) && req.method === 'GET') {
    const id = req.url.split('/')[3];
    getTask(req, res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 404: 'route not found :(' }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`run ${PORT}`));
