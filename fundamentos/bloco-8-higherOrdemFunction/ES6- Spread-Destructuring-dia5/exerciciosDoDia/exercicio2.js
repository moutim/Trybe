// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
function sum (...numbers) {
    return numbers.reduce((acc, number) => acc + number);
}
console.log(sum(2, 4, 6, 1, 2, 5, 7, 1, 2));