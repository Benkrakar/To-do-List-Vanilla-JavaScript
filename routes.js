import http  from "http";
import Data from "./data.js";

const server = http.createServer((req, res) => {
   if (req.url === '/api/tasks' && req.method === 'GET') {
      res.writeHead(200, { "Content-Type": "application/json" });
      Data.getdata(res);
   }else{
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({message: 'route not found ...'}))
   }
});

const PORT = 3000;
server.listen(PORT, () => console.log(`run ${PORT}`));
