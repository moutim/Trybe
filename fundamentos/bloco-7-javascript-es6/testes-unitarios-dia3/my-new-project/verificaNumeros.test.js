const numeros = require('./verificaNumeros');

describe('Requisito 1', () => {
    test('A funcao recebe [1, 2, 3, 4, 5] e retorna true', () => {
        expect(true).toEqual(numeros([1, 2, 3, 4, 5]));
    });
});

describe('Requisito 2', () => {
    it(`A funcao recebe [1, 2, '3', 4, 5] e retorna falso`, () => {
        expect(false).toEqual(numeros([1, 2, '3', 4, 5]));
    });
});

describe('Requisito 3', () => {
    test('A funcao recebe [" "] e retorna falso', () => {
        expect(false).toEqual(numeros([' ']));
    });
});