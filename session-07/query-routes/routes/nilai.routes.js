const express = require('express');
const { getNilai } = require('../controllers/nilai.controller');

const router = express.Router();

router.get('/', getNilai);
router.post('/');
router.delete('/:id');

module.exports = router;
