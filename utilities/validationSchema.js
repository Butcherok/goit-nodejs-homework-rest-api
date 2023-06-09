const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().min(2).max(12).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string().min(7).max(15).required(),
});

const editSchema = Joi.object({
  name: Joi.string().min(2).max(12),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phone: Joi.string().min(7).max(15),
}).xor("name", "email", "phone");

module.exports = { addSchema, editSchema };
