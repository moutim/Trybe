const service = require('./service');

describe('Testa se a funcao executa como esperado', () => {
    it('Verifica se a funcao retorna um numero', () => {
        service.randomNumber = jest.fn().mockReturnValue(10);
        expect(service.randomNumber()).toBe(10);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
    });

    it('Testa nova funcionalidade de divisao da funcao', () => {
        service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
        expect(service.randomNumber(5, 5)).toBe(1);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(5, 5);
    });

    it('Testa nova funcionalidade de multiplicacao da funcao', () => {
        service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
        expect(service.randomNumber(5, 5, 5)).toBe(125);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(5, 5, 5);
    });

    it('Testa nova funcionalidade de retornar o dobro de um numero', () => {
        service.randomNumber.mockReset();
        expect(service.randomNumber).toHaveBeenCalledTimes(0);

        service.randomNumber = jest.fn().mockImplementationOnce(a => a * 2);
        expect(service.randomNumber(5)).toBe(10);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(5);
    })
});