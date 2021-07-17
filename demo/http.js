const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h1>Hello from NodeJS</h1>');
});

server.listen(30000, 'localhost',() => console.log('Server hase been started...'));