const readline = require('readline-sync');

const verificaNumero = (palpite) => {
  const numeroAleatorio = Math.floor(Math.random() * 11);
  if (palpite === numeroAleatorio) return console.log('Parabéns, número correto!');
  return console.log(`Opa, não foi dessa vez. O número era ${numeroAleatorio}`);
}

const sorteio = () => {
  const numeroUsuario = readline.questionInt('Digite um numero');
  verificaNumero(numeroUsuario);
  const jogarDenovo = readline.question('Digite `s` se quiser jogar de novo!', { trueValue: ['s']});
  if (jogarDenovo) return sorteio();
  console.log('Bye');
}

sorteio();