const connection = require('./connection');

const createUser = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO model_example.users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)';
  try {
    await connection.execute(query, [firstName, lastName, email, password]);
  } catch(e) {
    throw new Error(JSON.stringify({ status: 403, message: 'Nao foi possivel inserir o usuario'}))
  }
};

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM model_example.users'
  );

  return users;
};

const getById = async (id) => {
  const query = 'SELECT * FROM model_example.users WHERE id=?';

  const [user] = await connection.execute(
    query, [id]
  );

  return user;
}

module.exports = {
  createUser,
  getAll,
  getById
}