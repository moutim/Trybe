const saberTipoDoNumero = require('../saberTipoDoNumero');
const { expect } = require("chai");
const readLine = require('readline-sync');
const sinon = require('sinon');

describe('Executa a funcao `saberTipoDoNumero`', () => {
  
  describe('O numero inserido eh maior que 0', () => {
    before(() => {
      sinon.stub(readLine, 'questionInt').returns(10);
    });

    it('O retorno eh `positivo`', () => {
      const resultado = saberTipoDoNumero(1);
      expect(resultado).to.be.equal('positivo');
    });
  });

  describe('O numero inserido eh menor que 0', () => {
    before(() => {
      readLine.questionInt.restore();
      sinon.stub(readLine, 'questionInt').returns(-10);
    });

    it('O retorno eh `negativo`', () => {
      const resultado = saberTipoDoNumero(-1);
      expect(resultado).to.be.equal('negativo');
    });
  });

  describe('O numero inserido eh igual a zero', () => {
    before(() => {
      readLine.questionInt.restore();
      sinon.stub(readLine, 'questionInt').returns(0);
    });

    it('O retorno eh `neutro`', () => {
      const resultado = saberTipoDoNumero(0);
      expect(resultado).to.be.equal('neutro');
    });
  });
})