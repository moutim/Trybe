const myFizzBuzz = require('../src/myFizzBuzz');

describe('Funcao myFizzBuzz', () => {
    it('Testa a funcao com numeros divisiveis por 3 e 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    it('Testa funcao com numero divisivel apenas por 3', () => {
        expect(myFizzBuzz(6)).toBe('fizz');
    })

    it('Testa funcao com numero divisivel apenas por 5', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    })

    it('Verifica retorno de numeros nao divisiveis por 3 e 5', () => {
        expect(myFizzBuzz(4)).toBe(4);
    })

    it('Se a entrada nao for numero, retorne false', () => {
        expect(myFizzBuzz('a')).toBeFalsy();
    })
});