const express = require('express');
const router = express.Router();

// Trazendo a rota exposta routers/characters.js para /characters
const charactersController = require('../controllers/characters');
router.use('/characters', charactersController);

module.exports = router;