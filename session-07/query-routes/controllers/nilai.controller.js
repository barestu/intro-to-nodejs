exports.getNilai = async (req, res) => {
  try {
    const query = 'SELECT * FROM nilai';
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
