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
media = media / numbers.length
console.log(media);



// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20":
if (media > 20){
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor que 20');
}



// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o:
let maior = 0;
for(let i = 0; i < numbers.length; i += 1){
    if ( numbers[i] > maior ) {
        maior = numbers[i];
     }
}
console.log(maior);