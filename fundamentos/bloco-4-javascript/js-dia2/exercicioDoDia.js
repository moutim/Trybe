// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log():
for(let number of numbers){
    console.log(number);
}

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado:
// Pra resolver esse exercicio tive que ver esse codigo para me situar na questao. Entendi o que foi escrito e apliquei no exercicio
// https://www.horadecodar.com.br/2021/01/18/como-somar-elementos-de-um-array-de-maneira-performaica/
let soma = 0;
for(var i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}
console.log(soma);



// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array:
let media = 0;
for(var i = 0; i < numbers.length; i++) {
    media += numbers[i];
}
console.log(media / numbers.length );