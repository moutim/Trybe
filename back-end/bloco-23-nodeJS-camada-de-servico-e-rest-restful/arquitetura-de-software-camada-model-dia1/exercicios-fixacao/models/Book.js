const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title, author_id FROM model_example.books;'
  );

  return books;
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    `SELECT title, author_id FROM model_example.books WHERE author_id = ${id}`
  );

  if (books.length === 0) return null;

  return books;
};

const create = async (title, author_id) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
  [title, author_id]
);

module.exports = {
  getAll,
  getByAuthorId,
  create
}