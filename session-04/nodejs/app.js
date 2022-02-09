const http = require('http');

http
  .createServer((req, res) => {
    res.write('Hello world');
    res.end;
  })
  .listen(800);

console.log('Server berjalan di port 8000');
