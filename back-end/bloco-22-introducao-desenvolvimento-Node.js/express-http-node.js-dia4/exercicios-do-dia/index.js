const express = require('express');

const app = express();

app.use(express.json());

app.use('/ex1', require('./routes/ex1'));

app.use('/ex2', require('./routes/simpsons'));

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`Aplicacao rodando na porta ${PORTA}`);
});