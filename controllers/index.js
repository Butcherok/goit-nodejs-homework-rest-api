const { register, login } = require("./auth/auth");

const {
  getAll,
  getById,
  add,
  delBiId,
  updateBiId,
  updateStatus,
} = require("./contacts/contacts");

module.exports = {
  register,
  login,
  add,
  getAll,
  getById,
  delBiId,
  updateBiId,
  updateStatus,
};
