const connection = require('./connection');

const createUser = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO model_example.users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)';
  try {
    connection.execute(query, [firstName, lastName, email, password]);
  } catch(e) {
    throw new Error(JSON.stringify({ status: 403, message: 'Nao foi possivel inserir o usuario'}))
  }
};

module.exports = {
  createUser,
}