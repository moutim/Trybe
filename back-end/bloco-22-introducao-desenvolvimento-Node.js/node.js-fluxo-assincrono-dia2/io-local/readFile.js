const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf-8')
  .then(data => {
    console.log(`Conteudo do arquivo: ${data}`);
  })
  .catch(error => {
    console.log(`Ocorreu um erro na aplicacao. Erro: ${error}`);
    process.exit(1);
  })