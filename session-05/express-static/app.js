const express = require('express');
const app = express();

app.use('/', function (req, res, next) {
  console.log('App is running');
  next();
});

app.get('/', function (req, res) {
  res.send('Welcome');
});

app.use('/table', function (req, res, next) {
  const shirt = true;
  const shoes = true;
  if (shirt && shoes) {
    return next();
  }
  res.send('USE No shoes or shirt');
});

app.get('/table', function (req, res, next) {
  const shirt = true;
  const shoes = true;
  if (shirt && shoes) {
    return next();
  }
  res.send('GET Welcome to the table');
});

app.get('/table', function (req, res, next) {
  res.send('GET Welcome to the table 2');
});

app.get('/menu/:isiMenu/kelengkapan/:isiKelengkapan', function (req, res) {
  let message = '';
  if (req.params.isiMenu == 1) {
    if (req.params.isiKelengkapan == 'yes') {
      message = 'Boleh duduk';
    } else {
      message = 'Tidak boleh duduk';
    }
  } else if (req.params.isiMenu == 2) {
    if (req.params.isiKelengkapan == 'burger') {
      message = 'Makanan anda diantar sesuai pesanan, ' + req.params.isiKelengkapan;
    } else {
      message = 'Pesanan salah';
    }
  } else if (req.params.isiMenu == 3) {
    if (req.params.isiKelengkapan == 24000) {
      message = 'Berhasil terbayar, terimakasih, ' + req.params.isiKelengkapan;
    } else {
      message = 'Gagal bayar';
    }
  } else {
    message = 'Menu salah';
  }
  res.send(message);
});

app.listen(5000, function () {
  console.log('Running on 5000');
});
