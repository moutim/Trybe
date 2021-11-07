// 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if.

const num1 = 3;
const num2 = 3;
const num3 = 2;

if( (num1 % 2) == 0 || (num2 % 2) == 0 || (num3 % 2) == 0 ){
    console.log('Um dos numeros é par');
} else {
    console.log('Nenhum dos numeros é par');
}