const express = require('express');
const { getMateri } = require('../controllers/materi.controller');

const router = express.Router();

router.get('/', getMateri);
router.post('/');
router.delete('/:id');

module.exports = router;
