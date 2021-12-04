// 1 - Crie uma função que receba um número e retorne seu fatorial
const fatorial = (numero) => {
    let fatorial = numero;
    let resultado = fatorial;
    for (let i = 1; i < fatorial; i+= 1) {
        resultado = resultado * i;
    }
    return resultado;
};
console.log(fatorial(5));

// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.
const maiorPalavra = frase => {
    const array = frase.split(' ');
    let letras = 0;
    let maiorPalavra = '';
    for (const palavra of array) {
        if (palavra.length > letras) {
            letras = palavra.length;
            maiorPalavra = palavra;
        }
    }
    return maiorPalavra;
}
console.log(maiorPalavra('Antonio foi no banheiro e não sabemossssssss o que aconteceu'));

// 3 - Faca um botao com um evento de listener e mostre quantas vezes ele foi clicado
// const botao = document.getElementById('botao');
// const paragrafo = document.getElementById('contagem');
// let clickCount = 0;
// botao.addEventListener('click', () => {clickCount += 1; paragrafo.innerText = `Voce clicou no botao ${clickCount} vezes`})

// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
const skills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'];
const x = (string, parametro) => {
    string = string.split(' ');
    let frase1;
    for (let i = 0; i < string.length; i += 1) {
        if (string[i] === 'x') {
            string[i] = parametro;
            frase1 = string.join(' ');
        }
    }
    let skill = '';
    for (let i of skills) {
        skill += `${i}; `
    }
    return `${frase1} Minhas cinco principais habilidades sao: ${skill}... #goTrybe`;
}
console.log(x('Tryber x aqui!', 'Vitor Moutim'));