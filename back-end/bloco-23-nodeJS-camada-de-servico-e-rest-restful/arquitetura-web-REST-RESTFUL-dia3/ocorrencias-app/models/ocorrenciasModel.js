const connection = require('./connection');

const getAll = () => {
  const ocorrencias = connection.execute(
    'SELECT o.descricao, o.data_hora, o.categoria, e.logradouro, e.cep FROM endereco AS e INNER JOIN ocorrencias AS o ON o.id_endereco = e.id_endereco;'
  );

  return ocorrencias;
};

module.exports = {
  getAll
}