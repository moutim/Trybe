// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
const greet = (name, greeting = 'Hi') => `${greeting} ${name}`;
console.log(greet('Vitor'));
console.log(greet('Vitor', 'Good morning'));
console.log(greet('Vitor', 'Oi'));