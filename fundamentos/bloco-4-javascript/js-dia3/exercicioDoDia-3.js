// 3 - Agora inverta o lado do triângulo.
let valor = 5;
let vazio = '';
let simbolo = '*';
let posicao = valor;
for (let i = 0; i < valor; i += 1){
    for (let index = 0; index <= valor; index+= 1){
        if(index < posicao){
            vazio = vazio + ' ';
        } else {
            vazio = vazio + simbolo;
        }
    }
    console.log(vazio);
    vazio = '';
    posicao -= 1;
}