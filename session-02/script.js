const fs = require('fs');
const http = require('http');

http
  .createServer(function (req, res) {
    fs.readFile('tiana.html', (err, data) => {
      if (err) throw err;

      res.writeHead(200, {
        'Content-Type': 'text/html',
      });
      res.write(data);
      res.end();
    });
  })
  .listen(8000);

console.log('server running on http://localhost:8000');
