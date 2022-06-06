const express = require('express');
const app = express();

app.use(express.json());

const routers = require('./routes');
app.use(routers);

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`Rodando na porta ${PORTA}`);
});