const fs = require('fs');
const sinon = require('sinon');
const { expect } = require("chai");
const criarArquivo = require('../criarArquivo');

describe('Executa a funcao para criar arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('Executa a funcao passando os parametros `arquivo1.txt` e `testando funcionalidade`', () => {
    it('Espera que retorne `ok`', () => {
      const resultado = criarArquivo('arquivo1.txt', 'testando funcionalidade');
      expect(resultado).to.be.equal('ok');
    });
  });

  describe('Executa a funcao passando parametros invalidos', () => {
    it('Espera uma execao com a mensagem `insira os dois parametros!`', () => {
      try {
        criarArquivo('arquivo1.txt');
      } catch(e) {
        expect(e).to.have.property('message');
        expect(e.message).to.be.equal('insira os dois parametros!');
      }
    })
  });
})