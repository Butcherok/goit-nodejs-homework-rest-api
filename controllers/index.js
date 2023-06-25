const { register, login, getCurrent, logout } = require("./auth/auth");

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
  getCurrent,
  logout,
  add,
  getAll,
  getById,
  delBiId,
  updateBiId,
  updateStatus,
};
