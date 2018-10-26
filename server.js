var htpp = require('http');

var_server = htpp.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"]);
  response.end("Hello World\n");
});

server.listen(8080);
