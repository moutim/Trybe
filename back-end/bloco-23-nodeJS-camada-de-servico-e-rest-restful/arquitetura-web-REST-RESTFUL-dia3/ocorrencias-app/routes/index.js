const express = require('express');
const router = express.Router();

router.use('/ocorrencias', require('../controllers/ocorrencias'));

module.exports = router;