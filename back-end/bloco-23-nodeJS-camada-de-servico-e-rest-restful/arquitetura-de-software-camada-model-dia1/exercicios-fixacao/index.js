const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');
const bodyValidate = require('./middlewares/bodyValidate');

const app = express();

app.use(express.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  console.log(authors);

  res.status(200).json(authors)
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.getById(id);

  res.status(200).json(author);
});

app.get('/books', async (req, res) => {
  const { id } = req.query;

  if (!id) {
    const books = await Book.getAll();
    res.status(200).json(books);
  }

  const books = await Book.getByAuthorId(id);
  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const books = await Book.getByAuthorId(id);

  if (!books) return res.status(404).json({ message: 'Not found.' });

  res.status(200).json(books);
})
;

app.post('/books', bodyValidate, async (req, res) => {
  const { title, author_id } = req.body;
  await Book.create(title, author_id);
  res.status(201).json({ message: 'Livro criado com sucesso!' });
});

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`Aplicacao rodando na porta ${PORTA}`);
})