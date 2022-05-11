const readLine = require('readline-sync');

const calculaArea = () => {
  const lado = readLine.questionInt('Digite o valor do lado para saber a area');

  if(lado < 0) {
    throw new Error('Valor invalido');
  }

  return lado * lado;
};

console.log(calculaArea(-2));

module.exports = calculaArea;