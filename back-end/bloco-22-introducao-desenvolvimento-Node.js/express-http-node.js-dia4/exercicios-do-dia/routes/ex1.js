const express = require('express');

const routes = express.Router();

routes.get('/ping', (req, res) => {
  res.status(200).json({ "message": "pong" });
});

routes.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}`});
});

routes.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) return res.status(200).json({ "message": `Hello, ${name}`});
  res.status(401).json({ "message": "Unauthorized" });
});

routes.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ "message": `Seu nome eh ${name} e voce tem ${age} anos`});
});

module.exports = routes;