const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5000;

app.set('view engine', 'pug');
app.set('views', 'views');

const dataPeserta = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Selamat Datang Peserta Hacktive8',
    message: 'Belajar membuat data peserta menggunakan Array',
    data: dataPeserta,
  });
});

app.get('/tambah', function (req, res) {
  res.render('tambah', {
    title: 'Tambah Peserta',
    message: 'Input data peserta baru',
  });
});

app.post('/tambah', function (req, res) {
  dataPeserta.push({
    nama: req.body.nama,
  });
  res.redirect('/');
});

app.get('/delete/:id', function (req, res) {
  const idPeserta = req.params.id - 1;
  dataPeserta.splice(idPeserta, 1);
  res.redirect('/');
});

app.listen(PORT, function () {
  console.log(`Running on ${PORT}`);
});
