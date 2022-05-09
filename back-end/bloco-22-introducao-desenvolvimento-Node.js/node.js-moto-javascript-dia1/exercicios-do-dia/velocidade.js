const readline = require('readline-sync');

// Crie um script para calcular a velocidade média de um carro numa corrida.

const distancia = readline.questionInt('Qual a distancia em metros?');
const tempo = readline.questionInt('Qual o tempo em segundos?');

const velocidadeMedia = (distancia, tempo) => distancia / tempo;

console.log(
  `A velocidade media em ${tempo}s e ${distancia}m eh de: ${velocidadeMedia(distancia, tempo).toFixed()}Km/h`
  );