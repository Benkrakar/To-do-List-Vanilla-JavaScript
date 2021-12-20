const http = require("http");
const {getTasks} = require("./controller/taskController.js");


const server = http.createServer((req, res) => {
   switch (req.url) {
     case "/api/tasks":
       getTasks(req, res);
       break;
     default:
       res.writeHead(404, { "Content-Type": "application/json" });
       res.end(JSON.stringify({ message: "route not found ..." }));
       break;
   }
});


const PORT = 3000;
server.listen(PORT, () => console.log(`run ${PORT}`));
