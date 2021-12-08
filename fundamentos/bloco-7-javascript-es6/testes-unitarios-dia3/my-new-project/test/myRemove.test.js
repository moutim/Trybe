const myRemove = require('../src/myRemove');

describe('Funcao myRemove', () => {
    test('Verifica se myRemove([1,2,3,4], 3), retorna um array sem o 3', () => {
        const array = [1, 2, 3, 4];
        expect(myRemove(array, 3)).toEqual([1, 2, 4]);
    });

    test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        const array = [1, 2, 3, 4];
        expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
    })

    test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        const array = [1, 2, 3, 4];
        expect(myRemove(array, 5)).toEqual(array);
    })
})