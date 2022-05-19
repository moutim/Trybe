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

module.exports = {
  createUser,
  getAll
}