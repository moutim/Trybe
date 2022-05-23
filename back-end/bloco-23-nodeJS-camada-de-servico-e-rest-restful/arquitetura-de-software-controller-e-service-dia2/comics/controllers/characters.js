const express = require('express');
const validationCharacterMiddleware = require('../middlewares/validation/characters.middleware');
const router = express.Router();
const charactersModel = require('../models/characters');
const charactersService = require('../services/characters');

// Rota para pegar todos characters
router.get('/', async (req, res) => {
    // Usando try-catch, uma outra forma de tratar erro qdo não o middleware de erro
    try {
        const [rows] = await charactersService.getCharacters(); // acessa camada de model para trazer os characters do db
        res.status(200).json(rows);   
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
});

// Rota para pegar characters por id
router.get('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const [rows] = await charactersService.getCharacters(id); // acessa a camada de model para trazer dados do db
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
});

router.post('/', validationCharacterMiddleware, async (req, res) => {
    try {
        const result = await charactersService.createCharacters(req.body);  // acessa a camada de model para salvar dados do db
        res.status(201).json(result);   
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
});

router.put('/:id', validationCharacterMiddleware, async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await charactersService.updateCharacter(id, req.body);

      if (result) {
        return res.status(201).json(result); 
      }
      res.status(404).json({ message: `Character ID ${id} não encontrado` });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      await charactersModel.exclude(id); 
  
      res.end();
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  });

module.exports = router;