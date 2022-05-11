const readLine = require('readline-sync');

const saberTipoDoNumero = () => {
  const numero = readLine.questionInt('Digite um numero para saber qual o tipo dele: ');
  
  if (numero > 0) return 'positivo';
  if (numero < 0) return 'negativo';
  if (numero === 0) return 'neutro';
};

module.exports = saberTipoDoNumero;
