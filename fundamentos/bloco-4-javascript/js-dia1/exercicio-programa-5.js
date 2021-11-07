// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Referencia Math.sign
// Math.sign retorna um valor que diz se o numero é positivo, negativo ou zero. -1(negativo), 1(positivo), 0(zero).
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

const a = 160;
const b = -10;
const c = 110;

if((a + b + c) == 180){
    console.log(true);
} else if(Math.sign(a) == -1 || Math.sign(b) == -1 || Math.sign(c) == -1){
    console.log("ERRO");
} 
else {
    console.log(false);
}