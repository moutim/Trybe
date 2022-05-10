const fs = require('fs').promises;

const caminhoDoArquivo = './meu-arquivo.txt';

fs.writeFile(caminhoDoArquivo, 'Meu TEXTOOOO')
  .then(() => {
    console.log(`Escrito com sucesso`);
  })
  .catch(error => {
    console.log(`Ocorreu algum erro. Erro: ${error.message}`);
  })