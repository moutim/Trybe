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
