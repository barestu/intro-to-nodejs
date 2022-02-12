const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Welcome');
});

app.post('/belajar', async function (req, res) {
  try {
    const nama_peserta = req.body.nama_peserta;
    const materi = req.body.materi;
    const query = 'INSERT INTO belajar (nama_peserta, materi) VALUES($1, $2) RETURNING *';

    const result = await db.query(query, [nama_peserta, materi]);

    res.status(201).send({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.log('[POST] Error /belajar', error);
    res.status(500).send(error.message);
  }
});

app.delete('/belajar/:id', async function (req, res) {
  try {
    const query = 'DELETE FROM belajar WHERE id = $1';
    await db.query(query, [req.params.id]);
    res.status(200).send({
      success: true,
      data: null,
    });
  } catch (error) {
    console.log('[DELETE] Error /belajar', error);
    res.status(500).send(error.message);
  }
});

app.get('/belajar', async function (req, res) {
  try {
    const query = 'SELECT * FROM belajar';
    const result = await db.query(query);
    res.status(200).send({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.log('[GET] Error /belajar', error);
    res.status(500).send(error.message);
  }
});

app.get('/belajar/:id', async function (req, res) {
  try {
    const id = req.params.id;
    const query = 'SELECT * FROM belajar WHERE id = $1';
    const result = await db.query(query, [id]);

    if (result.rows.length === 0) {
      res.status(200).send({
        success: true,
        message: 'Maaf data tidak ada',
        data: [],
      });
    } else {
      res.status(200).send({
        success: true,
        message: 'Data berhasil ditemukan',
        data: result.rows[0],
      });
    }
  } catch (error) {
    console.log('[GET] Error /belajar', error);
    res.status(500).send(error.message);
  }
});

app.put('/belajar/:id', async function (req, res) {
  try {
    const nama_peserta = req.body.nama_peserta;
    const materi = req.body.materi;
    const id = req.params.id;
    const query = 'update belajar set nama_peserta = $1, materi = $2 where id = $3';
    const result = await db.query(query, [nama_peserta, materi, id]);
    res.status(200).send({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.log('[PUT] Error /belajar', error);
    res.status(500).send(error.message);
  }
});

app.listen(5000, function () {
  console.log('Running on port 5000');
});
