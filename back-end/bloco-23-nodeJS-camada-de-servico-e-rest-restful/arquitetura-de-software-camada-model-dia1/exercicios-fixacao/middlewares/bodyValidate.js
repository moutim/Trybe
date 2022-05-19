const Author = require('../models/Author');

const bodyValidate = async (req, res, next) => {
  const { title, author_id } = req.body;

  const isAuthorExist = await Author.getById(author_id);

  if (!isAuthorExist || !title || title.length < 3) {
    res.status(401).json({ message: 'Dados inválidos' });
  }

  next();
};

module.exports = bodyValidate;