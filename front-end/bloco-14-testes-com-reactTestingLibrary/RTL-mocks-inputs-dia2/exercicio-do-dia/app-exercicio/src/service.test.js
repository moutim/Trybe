const service = require('./service');

describe('Testa se a funcao executa como esperado', () => {
    it('Verifica se a funcao retorna um numero', () => {
        service.randomNumber = jest.fn().mockReturnValue(10);
        expect(service.randomNumber()).toBe(10);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
    });
});