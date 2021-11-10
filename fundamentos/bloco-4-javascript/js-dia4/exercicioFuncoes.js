// Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
function contas (num1, num2){
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
    console.log(num1 % num2); 
}
contas(2,3)

// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
function maior (num1, num2){
    if (num1 > num2){
        console.log(num1);
    }else if (num2 > num1){
        console.log(num2);
    } else{
        console.log('Os numero sao iguais');
    }
}
maior(1, 2)

// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
function maiorDeTres (num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else {
    console.log(num3);
}
}
maiorDeTres(12,33,6)

// 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
function negativeOrPositive (number){
    if(number > 0){
        console.log("positive");
    } else if (number == 0){
        console.log("zero");
    } else {
        console.log("negative");
    }
}
negativeOrPositive(-3)

// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
function itsPyramid (a, b, c){
    if((a + b + c) == 180){
        console.log(true);
    } else if(Math.sign(a) == -1 || Math.sign(b) == -1 || Math.sign(c) == -1){
        console.log("ERRO");
    } 
    else {
        console.log(false);
    }
}
itsPyramid(60,60,60)

// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
function movesChess (chessPiece){
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
}
movesChess('rei')

//  7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

function gradeResult (nota){
    if (nota >= 90 && nota <= 100){
        console.log('Voce tirou A');
    } else if (nota >= 80 && nota <= 89){
        console.log('Voce tirou B');
    } else if (nota >= 70 && nota <= 79){
        console.log('Voce tirou C');
    } else if (nota >= 60 && nota <= 69){
        console.log('Voce tirou D');
    } else if (nota >= 50 && nota <= 59){
        console.log('Voce tirou E');
    } else if (nota >= 0 && nota <= 49){
        console.log('Voce tirou F');
    } else {
        console.log('Insira uma nota valida!');
    }
}
gradeResult(100)

// 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false 
function itsEven (num1, num2, num3){
    if( (num1 % 2) == 0 || (num2 % 2) == 0 || (num3 % 2) == 0 ){
        console.log('Um dos numeros é par');
    } else {
        console.log('Nenhum dos numeros é par');
    }
}
itsEven(1,3,2)

// 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. 
function itsOdd (num1, num2, num3){
    if( (num1 % 2) !== 0 || (num2 % 2) !== 0 || (num3 % 2) !== 0 ){
        console.log('Um dos numeros é impar');
    } else {
        console.log('Nenhum dos numeros é impar');
    }
}
itsOdd(1,2,2)

// 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
function profit (cost, sale){
    let realValue = (cost * 0.20) + cost;
    let soldValue = (sale * 1000) - (realValue * 1000);
    return soldValue
}
console.log(profit(5,10));

// 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioNovo;
let valorINSS;
let valorIR;
function INSS (salario){
    if (salario <= 1556.94){
        valorINSS = salario - (salario * 0.08) ; 
    } else if (salario >= 1556.95 && salario <= 2594.92){
        valorINSS = salario - (salario * 0.09);
    } else if (salario >= 2594.93 && salario <= 5189.82){
        valorINSS = salario - (salario * 0.11);
    } else if (salario > 5189.83){
        valorINSS = salario - 570.88;
    }
}

let resultINSS = INSS(3000.00)

function IR (resultINSS){ 
    if (resultINSS >= 1903.99 && resultINSS <= 2826.65){
        valorIR = (resultINSS * 0.075) - 142.80;
    } else if (resultINSS >= 2826.66 && resultINSS <= 3751.05){
        valorIR = (resultINSS * 0.15) - 354.80;
    } else if (resultINSS >= 3751.06 && resultINSS <= 4664.68){
        valorIR = (resultINSS * 0.225) - 636.13;
    } else if (resultINSS > 4664.69){
        valorIR = (resultINSS * 0.27) - 869.36;
    }
    
    salarioNovo = resultINSS - valorIR;
}
console.log(IR());