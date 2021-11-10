// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
let valor = 5;
let vazio = '';
let simbolo = '*';
for (let i = 0; i < valor; i += 1){
        vazio = vazio + simbolo
}
for(let i = 0; i < valor; i+= 1){
        console.log(vazio);
}