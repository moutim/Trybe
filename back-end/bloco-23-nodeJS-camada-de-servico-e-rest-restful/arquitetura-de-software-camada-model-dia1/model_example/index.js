const express = require('express');
const Authors = require('./models/Author')

const app = express();

app.use(express.json());

app.get('/authors', async (req, res) => {
  const authors = await Authors.getAll();

  res.status(200).json(authors)
});

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`Aplicacao rodando na porta ${PORTA}`);
})