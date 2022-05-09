const readline = require('readline-sync');

const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');

const selecaoDeFuncao = () => {
  console.log('Digite 1 para calcular o IMC');
  console.log('Digite 2 para calcular a velocidade media');
  console.log('Digite 3 para sortear um numero');

  const opcaoUsuario = readline.questionInt('Digite sua opcao - ')

  if (opcaoUsuario === 1) return imc();
  if (opcaoUsuario === 2) return velocidade();
  return sorteio();
}

selecaoDeFuncao();