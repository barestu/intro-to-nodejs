const express = require('express');
const db = require('./db');

global.db = db;
const pesertaRoutes = require('./routes/peserta.routes');
const materiRoutes = require('./routes/materi.routes');
const nilaiRoutes = require('./routes/nilai.routes');

const app = express();

app.use(express.json());
app.use('/peserta', pesertaRoutes);
app.use('/materi', materiRoutes);
app.use('/nilai', nilaiRoutes);

// app.post('/materi', async function (req, res) {
//   try {
//     const { nama_materi } = req.body;
//     const query = 'INSERT INTO materi (nama_materi) VALUES($1) RETURNING *';
//     const result = await db.query(query, [nama_materi]);
//     res.status(201).send({
//       success: true,
//       data: result.rows[0],
//     });
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       error: error.message,
//     });
//   }
// });

// app.delete('/materi/:id', async function (req, res) {
//   try {
//     const { id } = req.params;
//     const queryCheckMateri = `
//       SELECT * FROM peserta p
//       JOIN materi m
//       ON p.id_materi = m.id_materi
//       WHERE m.id_materi = $1;
//     `;
//     const materiDipakai = await db.query(queryCheckMateri, [id]);

//     if (materiDipakai.rows.length > 0) {
//       throw new Error('Tidak bisa menghapus materi karena sudah dipakai peserta');
//     }

//     const queryDelete = 'DELETE FROM materi WHERE id_materi = $1';
//     await db.query(queryDelete, [id]);

//     res.status(201).send({
//       success: true,
//       data: null,
//     });
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       error: error.message,
//     });
//   }
// });

// app.post('/peserta', async function (req, res) {
//   try {
//     const { nama, kelas, id_materi } = req.body;
//     const query = `
//       INSERT INTO peserta (nama, kelas, id_materi)
//       VALUES($1, $2, $3)
//       RETURNING *
//     `;
//     const result = await db.query(query, [nama, kelas, id_materi]);
//     res.status(201).send({
//       success: true,
//       data: result.rows[0],
//     });
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       error: error.message,
//     });
//   }
// });

// app.delete('/peserta/:id', async function (req, res) {
//   try {
//     const { id } = req.params;
//     const queryCheckPeserta = `
//       SELECT * FROM nilai n
//       JOIN peserta p
//       ON n.id_peserta = p.id_peserta
//       WHERE p.id_peserta = $1;
//     `;
//     const pesertaDipakai = await db.query(queryCheckPeserta, [id]);

//     if (pesertaDipakai.rows.length > 0) {
//       throw new Error('Tidak bisa menghapus peserta karena sudah terinput di table nilai');
//     }

//     const queryDelete = 'DELETE FROM peserta WHERE id_peserta = $1';
//     await db.query(queryDelete, [id]);
//     res.status(201).send({
//       success: true,
//       data: null,
//     });
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       error: error.message,
//     });
//   }
// });

// app.post('/nilai', async function (req, res) {
//   try {
//     const { id_peserta, id_materi, nilai, huruf_mutu } = req.body;
//     const query =
//       'INSERT INTO nilai (id_peserta, id_materi, nilai, huruf_mutu) VALUES($1, $2, $3, $4) RETURNING *';
//     const result = await db.query(query, [id_peserta, id_materi, nilai, huruf_mutu]);
//     res.status(201).send({
//       success: true,
//       data: result.rows[0],
//     });
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       error: error.message,
//     });
//   }
// });

// app.delete('/nilai/:id', async function (req, res) {
//   try {
//     const query = 'DELETE FROM nilai WHERE id_nilai = $1';
//     await db.query(query, [req.params.id]);
//     res.status(201).send({
//       success: true,
//       data: null,
//     });
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       error: error.message,
//     });
//   }
// });

app.listen(5000, function () {
  console.log('Running on 5000');
});
