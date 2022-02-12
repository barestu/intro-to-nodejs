exports.getPeserta = async (req, res) => {
  try {
    const query = 'SELECT * FROM peserta';
    const result = await db.query(query);
    res.status(201).send({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

exports.createPeserta = async (req, res) => {
  try {
    const { nama, kelas, id_materi } = req.body;
    const query = `
      INSERT INTO peserta (nama, kelas, id_materi)
      VALUES($1, $2, $3)
      RETURNING *
    `;
    const result = await db.query(query, [nama, kelas, id_materi]);
    res.status(201).send({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

exports.deletePeserta = async (req, res) => {
  try {
    const { id } = req.params;
    const queryCheckPeserta = `
      SELECT * FROM nilai n
      JOIN peserta p
      ON n.id_peserta = p.id_peserta
      WHERE p.id_peserta = $1;
    `;
    const pesertaDipakai = await db.query(queryCheckPeserta, [id]);

    if (pesertaDipakai.rows.length > 0) {
      throw new Error('Tidak bisa menghapus peserta karena sudah terinput di table nilai');
    }

    const queryDelete = 'DELETE FROM peserta WHERE id_peserta = $1';
    await db.query(queryDelete, [id]);
    res.status(201).send({
      success: true,
      data: null,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};
