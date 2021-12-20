const http = require("http");
const {getTasks} = require("./controller/taskController.js");


const server = http.createServer((req, res) => {
  if (req.url === "/api/tasks" && req.method === "GET") {
    getTasks(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "route not found ..." }));
  }
});

const PORT = 3000;
server.listen(PORT, () => console.log(`run ${PORT}`));
