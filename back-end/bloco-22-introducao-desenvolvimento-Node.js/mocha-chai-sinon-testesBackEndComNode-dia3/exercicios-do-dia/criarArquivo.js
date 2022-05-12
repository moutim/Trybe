const fs = require('fs');

const criarArquivo = async (nomeDoArquivo, conteudo) => {
  try {
    fs.writeFileSync(nomeDoArquivo, conteudo);
    return 'ok';
  } catch(e) {
    throw new Error('insira os dois parametros!');
  }

};

module.exports = criarArquivo;