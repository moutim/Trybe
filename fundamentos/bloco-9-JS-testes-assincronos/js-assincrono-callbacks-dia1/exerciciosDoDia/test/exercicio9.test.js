// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require("@jest/globals");
const { getPokemonDetails } = require("../exercicio8.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
      const erro = new Error('Não temos esse pokémon para você :(');
      const callback = (error, message) => {
        expect(error).toEqual(erro);
        done();
      };
      getPokemonDetails((pokemon) => pokemon.name === 'teste', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
      const messageExpect = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
      const callback = (error, message) => {
        expect(message).toBe(messageExpect);
        done();
      };
      getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});