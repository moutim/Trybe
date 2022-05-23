const Joi = require('joi');

// Definição do Objeto Joi
const characterDTO = Joi.object({
    name: Joi.string().required(), // name precisa ser string e obrigatório
    cartoon: Joi.string().required(),
    year: Joi.number().required(),
    creators: Joi.array().items(
        {
            name: Joi.string().required(),
            birthDate: Joi.date().required()
        }
    ).required()
}).messages({
    // mensagem customizada para qualquer tipo de dado qdo for obrigatótio
    "any.required": "campo {{#label}} é obrigatório",
    // mensagem customizada para tipp number e qualquer erro
    "number.base": "campo {{#label}} deve ser numérico"
});

// Camada de middleware para fazer a validação
const validationCharacterMiddleware = (req, res, next) => {
    const {error} = characterDTO.validate(req.body, { abortEarly: false });
    if (!error) {
        return next();
    }
    // console.log("error", error);
    const messages = error.details.map(e => e.message); // retira apenas a mensagem de erro do array details de todos os erros
    return res.status(400).json({errors: messages});
    
}

module.exports = validationCharacterMiddleware;