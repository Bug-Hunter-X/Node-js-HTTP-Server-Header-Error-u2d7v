const http = require('http');

const server = http.createServer((req, res) => {
  // Correct way to set the header: use either setHeader or writeHead, but not both.
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});