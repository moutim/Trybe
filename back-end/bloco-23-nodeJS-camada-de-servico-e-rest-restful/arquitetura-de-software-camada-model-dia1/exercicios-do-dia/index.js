const express = require('express');
const middleware = require('./middlewares');
const Users = require('./models/Users');

const app = express();

app.use(express.json());

app.post('/users', middleware.verifyUserBody, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  await Users.createUser(firstName, lastName, email, password);

  res.status(201).json(req.body);
});

app.get('/users', async (req, res) => {
  const users = await Users.getAll();

  if (users.length === 0) {
    res.status(404).json({ message: 'Nao foi encontado usuarios nesse banco de dados'});
  }

  res.status(200).json(users);
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  const user = await Users.getById(id);

  if (user.length === 0) {
    res.status(404).json({ message: 'Usuario nao encontado' });
  }

  res.status(200).json(user);
});

app.put('/users', middleware.verifyUserBody, async (req, res) => {
  const { firstName, lastName, email, password, id } = req.body;

  const result = await Users.updateUser(firstName, lastName, email, password, id);

  if (!result) return res.status(404).json({ message: 'usuario nao encontrado' });

  res.status(201).json(req.body);
});

app.use(middleware.handleError);

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`Aplicacao rodando na porta ${PORTA}`);
})