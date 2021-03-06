const sum = require('../src/sum');

describe('Funcao sum', () => {
    it('Verifica se o retorno de sum(4, 5) é igual a 9', () => {
        expect(sum(4, 5)).toBe(9);
    })

    it('Verifica se o retorno de sum(0, 0) é igual a 0', () => {
        expect(sum(0, 0)).toBe(0);
    })

    it('Verifica se dispara erro quando entrada da funcao for string', () => {
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
        expect(() => sum(4, '5')).toThrowError();
    })
})