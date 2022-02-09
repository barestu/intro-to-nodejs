const express = require('express');
const app = express();

app.use('/', function (req, res, next) {
  console.log('App is running');
  next();
});

app.get('/', function (req, res) {
  res.send('Welcome');
});

app.get('/table/:amount', function (req, res) {
  const party = req.params.amount;
  let message = '';

  if (party == 1) {
    message = 'Nama saya Fandy';
  } else if (party == 2) {
    message = 'Rumah saya di Yogyakarta';
  }

  // res.send('We are searching for your table for ' + party + '!');
  res.send(message);
});

app.post('/table', function (req, res) {
  res.send('You just hit POST method');
});

app.put('/table', function (req, res) {
  res.send('You just hit PUT method');
});

app.delete('/table', function (req, res) {
  res.send('You just hit DELETE method');
});

app.listen(5000, function () {
  console.log('Running on 5000');
});
