// Crie uma função que gere um número aleatório
// Defina uma função que gere um número aleatório entre 0 e 100.
// Desenvolva os testes para essa função.
// Utilize o mock e defina o retorno padrão como 10.
// Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
const randomNumber = () => Math.floor(Math.random() * 101);


// Desenvolva a primeira função: essa função deve recebe uma string e retorná-la em caixa alta.
const toUpperCase = string => string.toUpperCase();

// Crie a segunda função: ela recebe uma string e deve retornar só a primeira letra.
const firstCapitalLetter = string => string[0];

// Elabore a terceira função: essa função deve receber duas strings e concatená-las.
const concatenateStrings = (a, b) => a + b;


module.exports = { randomNumber, toUpperCase, firstCapitalLetter, concatenateStrings };