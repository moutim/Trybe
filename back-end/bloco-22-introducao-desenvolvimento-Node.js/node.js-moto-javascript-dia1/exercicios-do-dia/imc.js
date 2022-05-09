const readline = require('readline-sync');

// 🚀 Crie um script para calcular o Índice de Massa Corporal (IMC) de uma pessoa.
// 🚀 Agora, permita que o script seja executado através do comando npm run imc
// 🚀 Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.
// 🚀 Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
// 🚀 Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:

function descricaoIMC(imc, altura, peso) {
  const message = `Com uma altura de ${altura}m e peso ${peso}kg, seu IMC é: ${imc}.`;
  if (imc < 18.5) {
    return `${message}. Voce esta magro.`;
  } else if (imc > 18.5 && imc < 24.9) {
    return `${message}. Voce esta com peso normal.`;
  } else if (imc > 25 && imc < 29.9) {
    return `${message}. Voce esta acima do peso.`;
  } else if (imc > 30 && imc < 34.9) {
    return `${message}. Voce esta com obesidade grau I.`;
  } else if (imc > 35 && imc < 39.9) {
    return `${message}. Voce esta com obesidade grau II`;
  }
  else return `${message}. Voce esta com obesidade grau III e IV`;
}

const medirIMC = () => {
  const altura = readline.questionFloat('Qual sua altura em metros?');
  const peso = readline.questionFloat('Qual seu peso em kg?');
  const imc = peso / (altura * altura);
  const resultadoIMC = IMC(imc, altura, peso).toFixed();
  console.log(resultadoIMC);
}

module.exports = medirIMC;
