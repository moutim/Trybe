// 4- Depois, faça uma pirâmide com n asteriscos de base.
let valor = 5;
let vazio = '';
let simbolo = '*';

let meioPiramide = (valor + 1) / 2;
let esquerda = meioPiramide;
let direita = meioPiramide;


for (let i = 0; i <=  meioPiramide; i += 1){
    for (let index = 0; index <= valor; index+= 1){
        if(index > esquerda && index < direita){
            vazio = vazio + simbolo;
        } else {
            vazio = vazio + ' ';
        }
    }
    console.log(vazio);
    vazio = '';
    direita += 1;
    esquerda -= 1
}