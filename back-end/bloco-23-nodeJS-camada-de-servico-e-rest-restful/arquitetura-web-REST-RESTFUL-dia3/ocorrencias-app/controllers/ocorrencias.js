const express = require('express');
const router = express.Router();

const ocorrenciasService = require('../services/ocorrenciasService');

router.get('/', async (req, res) => {
  const [ocorrencias] = await ocorrenciasService.getOcorrencias();

  res.status(200).json({ ocorrencias });
});

module.exports = router;