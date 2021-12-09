// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'A', 'N.A', 'A', 'D', 'B'];

function respostasCertas (gabarito, respostas, funcao){
    let corretas = 0;
    for (let i = 0; i < gabarito.length; i += 1) {
        if (funcao(gabarito[i], respostas[i])) {
            corretas += 1;
        }
    }
    return `Voce acertou ${corretas} questoes`;
}
const checaRespostas = (gabarito, respostas) => (gabarito === respostas) ? true : false;
console.log(respostasCertas(RIGHT_ANSWERS, STUDENT_ANSWERS, checaRespostas));