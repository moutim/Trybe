const verifyFirstName = (firstName) => {
  if (!firstName || firstName.length < 3) {
    throw new Error(JSON.stringify(
      { status: 401, message: 'O nome esta vazio ou possui menos de 3 letras'}
    ));
  }
};

const verifyLastName = (lastName) => {
  if (!lastName || lastName.length < 3) {
    throw new Error(JSON.stringify(
      { status: 401, message: 'O ultimo nome esta vazio ou possui menos de 3 letras'}
    ));
  }
};

const verifyEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;

  if (!email || !regex.test(email)) {
    throw new Error(JSON.stringify(
      { status: 401, message: 'O email esta vazio ou no formato errado'}
    ));
  }
};

const verifyPassword = (password) => {
  if (!password || typeof password !== 'string') {
    throw new Error(JSON.stringify(
      { status: 401, message: 'A senha esta vazio ou a senha esta em letras e deve ser numeros'}
    ));
  }
}

const verifyUserBody = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  verifyFirstName(firstName);
  verifyLastName(lastName);
  verifyEmail(email);
  verifyPassword(password);

  next();
}

module.exports = verifyUserBody;