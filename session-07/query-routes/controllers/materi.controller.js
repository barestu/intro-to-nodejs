exports.getMateri = async (req, res) => {
  try {
    const query = 'SELECT * FROM materi';
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
