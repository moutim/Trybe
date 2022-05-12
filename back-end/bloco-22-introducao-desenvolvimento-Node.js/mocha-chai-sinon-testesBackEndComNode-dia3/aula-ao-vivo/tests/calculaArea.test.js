const { expect } = require('chai');
const sinon = require('sinon');
const readLine = require('readline-sync');
const calculaArea = require('../calculaArea');

describe('Executa funcao `calculaArea`', () => {

  describe('Quando o valor informado for maior ou igual zero', () => {
    
    before(() => {
      sinon.stub(readLine, 'questionInt').returns(10);
    });

    describe('A resposta: ', () => {
      it('eh number', () => {
        const resultado = calculaArea();
        expect(resultado).to.be.a('number');
      });

      it('Ao chamar a funcao com o valor `10` o resultado sera `100`', () => {
        const resultado = calculaArea();
        expect(resultado).to.be.equal(100);
      });
    });

  });

  describe('Quando o valor informado eh negativo', () => {

    before(() => {
      readLine.questionInt.restore();
      sinon.stub(readLine, 'questionInt').returns(-2);
    });

    it('Deve ocorre um erro com a mensagem `Valor invalido`', () => {
      try {
        calculaArea(-2);
      } catch(e) {
        expect(e.message).to.equal('Valor invalido');
      }
      // expect(calculaArea).to.throw('Valor invalido');
    })
  });

});