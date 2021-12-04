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
