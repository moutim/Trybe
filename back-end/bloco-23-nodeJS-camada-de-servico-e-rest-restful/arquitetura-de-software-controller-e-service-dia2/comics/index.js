const express = require('express');

const app = express();

// Adicionando camada de middleware para transformar body em json obj
app.use(express.json());

const routers = require('./routers');
app.use(routers);

// definindo port para uso com docker
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`App rodando na port ${port}`);
})

