// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let chessPiece = "BISDPO";
switch(chessPiece.toLowerCase()){
    case chessPiece = "peao":
        console.log('O ' + chessPiece +' pode se mover uma casa pra frente');
        break;
    case chessPiece = "rei":
        console.log('O ' + chessPiece + ' pode se mover em qualquer direcao, com uma casa por vez');
        break;
    case chessPiece = "dama":
        console.log('A ' + chessPiece + ' pode se mover em qualquer direcao, quantas casas quiser');
        break;
    case chessPiece = "torre":
        console.log('A ' + chessPiece + ' pode se mover em linha reta');
        break;
    case chessPiece = "bispo":
        console.log('O ' + chessPiece +' pode se mover na diagonal, quantas casas quiser');
        break;
    case chessPiece = "cavalo":
        console.log('O ' + chessPiece +' pode se mover em direcao de "L"');
        break;

    default:
        console.log("Escolha uma peca valida");
}