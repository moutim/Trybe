// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
let valor = 5;
for (let i = 0; i < valor; i += 1){
        console.log('*****');
}



// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
let simbolo = '*';
let vazio = '';
for (let i = 0; i < valor; i += 1){
        vazio = vazio + simbolo
        console.log(vazio);
}