const http = require('http');

const server = http.createServer((req, res) => {
  // The error is here: Incorrect header name
  res.setHeader('content-type', 'text/html');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});