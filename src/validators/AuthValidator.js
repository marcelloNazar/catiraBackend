const { checkSchema } = require("express-validator");

module.exports = {
  signUp: checkSchema({
    name: {
      trim: true,
      notEmpty: true,
      isLength: {
        options: { min: 2 },
      },
      errorMessage: "Nome precisa ter pelo menos 2 caracteres",
    },
    email: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage: "E-mail invalido",
    },
    password: {
      isLength: {
        options: { min: 4 },
      },
      errorMessage: "A senha precisa ter pelo menos 4 caracteres",
    },
    state: {
      notEmpty: true,
      errorMessage: "Estado não preenchido",
    },
  }),
  signIn: checkSchema({
    email: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage: "E-mail invalido",
    },
    password: {
      isLength: {
        options: { min: 4 },
      },
      errorMessage: "A senha precisa ter pelo menos 4 caracteres",
    },
  }),
};
