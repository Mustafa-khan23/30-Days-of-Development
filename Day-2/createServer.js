const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("hello Development");
});

server.listen(3000);
