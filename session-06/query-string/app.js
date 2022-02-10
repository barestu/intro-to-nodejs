const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async function (req, res) {
  let page = req.query.page;
  let limit = req.query.limit;
  let nama = req.query.nama;
  let hasil = '';

  if (page > 5) {
    hasil = 'Not found';
  } else {
    hasil = 'Show data';
  }

  res.send({
    page,
    limit,
    nama,
    hasil,
  });
});

app.listen(5000, function (req, res) {
  console.log('Running on 5000');
});
