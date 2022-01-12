const { expect } = require("@jest/globals");
const uppercase = require('../exercicio7.js');

test('Testa se a funcao retorna uma palavra com letras maiusculas', (done) => {
  uppercase('vitor', (word) => {
    try {
      expect(word).toBe('VITOR');
      done();
    } catch(error) {
      done(error);
    }
  })
});