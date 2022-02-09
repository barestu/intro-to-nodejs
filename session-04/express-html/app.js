const express = require('express');
const app = express();

app.use('/', function (req, res, next) {
  console.log('App is running');
  next();
});

app.get('/', function (req, res) {
  res.send('Welcome');
});

app.get('/about', function (req, res) {
  res.sendFile('./views/about.html', { root: __dirname });
});

app.listen(5000, function () {
  console.log('Running on 5000');
});
