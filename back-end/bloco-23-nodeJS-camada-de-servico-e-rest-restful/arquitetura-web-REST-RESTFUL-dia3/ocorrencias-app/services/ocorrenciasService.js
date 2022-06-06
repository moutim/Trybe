const ocorrenciasModel = require('../models/ocorrenciasModel');

const getOcorrencias = () => {
  const ocorrencias = ocorrenciasModel.getAll();

  return ocorrencias;
}

module.exports = {
  getOcorrencias
}