const handleError = (error, req, res, next) => {
  const erro = JSON.parse(error.message);

  res.status(erro.status || 500).json({ message: erro.message});

  next();
};

module.exports = handleError;