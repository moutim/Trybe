const service = require('./service');


describe('Testa se a funcao randomNumber foi executada como esperado', () => {
    // Crie uma função que gere um número aleatório
    //     Defina uma função que gere um número aleatório entre 0 e 100.
    //     Desenvolva os testes para essa função.
    //     Utilize o mock e defina o retorno padrão como 10.
    //     Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
    it('Verifica se a funcao retorna um numero', () => {
        service.randomNumber = jest.fn().mockReturnValue(10);
        expect(service.randomNumber()).toBe(10);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
    });

    // Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.
    // Defina o mock da função para a nova funcionalidade da função.
    // Teste se a função foi chamada e a nova implementação de divisão foi aplicada.
    // Verifique se a aplicação da nova implementação acontece apenas uma vez.
    it('Testa nova funcionalidade de divisao da funcao', () => {
        service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
        expect(service.randomNumber(5, 5)).toBe(1);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(5, 5);
    });

    // Use a mesma função do primeiro exercício
    //     Utilize o mock e desenvolva uma nova implementação que receba três parâmetros
    //     Retorne a multiplicação dos parâmetros.
    //     Realize os testes que achar necessário.
    //     Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.
    //     Faça os testes que achar necessário.

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

describe('Testa nova funcionalidade da funcao toUpperCase', () => {
    it('Testa se a funcao toUpperCase retorna uma string em caixa baixa', () => {
        const toUpperCase = jest.spyOn(service, 'toUpperCase' ).mockImplementation(a => a.toLowerCase());

        expect(toUpperCase('VITOR')).toBe('vitor');
        expect(service.toUpperCase).toHaveBeenCalled();
        expect(service.toUpperCase).toHaveBeenCalledWith('VITOR');
        expect(service.toUpperCase).toHaveBeenCalledTimes(1);
    });
});

describe('Testa nova funcionalidade da funcao firstCapitalLetter', () => {
    it('Testa se a funcao firstCapitalLetter retorna a ultima letra da string', () => {
        const firstCapitalLetter = jest.spyOn(service, 'firstCapitalLetter').mockImplementation(a => a.charAt(a.length - 1));
        
        expect(firstCapitalLetter('Vitor')).toBe('r');
        expect(service.firstCapitalLetter).toHaveBeenCalled();
        expect(service.firstCapitalLetter).toHaveBeenCalledWith('Vitor');
        expect(service.firstCapitalLetter).toHaveBeenCalledTimes(1);
    });
});

describe('Testa nova funcionalidade da funcao concatenateStrings', () => {
    it('Testa se a funcao concatenateStrings retorna a concatenacao de 3 strings', () => {
        const concatenateStrings = jest.spyOn(service, 'concatenateStrings').mockImplementation((a, b, c) => a + b + c);
        
        expect(concatenateStrings('T', 'ry', 'be')).toBe('Trybe');
        expect(service.concatenateStrings).toHaveBeenCalled();
        expect(service.concatenateStrings).toHaveBeenCalledWith('T', 'ry', 'be');
        expect(service.concatenateStrings).toHaveBeenCalledTimes(1);
    });
});

describe('Testa reset de funcoes mockadas', () => {
    it('Verifica se a funcao toUpperCase volta ao estado normal depois de executar mockRestore', () => {
        service.toUpperCase.mockRestore();
        expect(service.toUpperCase('teste')).toBe('TESTE');
    });
});

describe('Testa a funcao fetchAPI', () => {
    it('Verifica se a funcao foi resolvida e retorna "request sucess"', async () => {
        service.fetchAPI = jest.fn().mockResolvedValue("request sucess");

        await expect(service.fetchAPI()).resolves.toBe('request sucess');
        expect(service.fetchAPI).toHaveBeenCalled();
        expect(service.fetchAPI).toHaveBeenCalledTimes(1);
    })

    it('Verifica se a funcao foi resolvida e retorna "request failed"', async () => {
        service.fetchAPI = jest.fn().mockResolvedValue("request failed");

        await expect(service.fetchAPI()).resolves.toBe('request failed');
        expect(service.fetchAPI).toHaveBeenCalled();
        expect(service.fetchAPI).toHaveBeenCalledTimes(1);
    })
});


