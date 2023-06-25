const { register } = require("./auth/auth");

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
  add,
  getAll,
  getById,
  delBiId,
  updateBiId,
  updateStatus,
};
