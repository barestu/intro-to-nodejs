const express = require('express');
const { getPeserta, createPeserta, deletePeserta } = require('../controllers/peserta.controller');

const router = express.Router();

router.get('/', getPeserta);
router.post('/', createPeserta);
router.delete('/:id', deletePeserta);

module.exports = router;
