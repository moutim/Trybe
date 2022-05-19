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

app.use(middleware.handleError);

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`Aplicacao rodando na porta ${PORTA}`);
})