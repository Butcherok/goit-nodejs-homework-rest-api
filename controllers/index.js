const {
  register,
  login,
  getCurrent,
  logout,
  subscriptionUpdate,
} = require("./auth/auth");

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
  subscriptionUpdate,
  add,
  getAll,
  getById,
  delBiId,
  updateBiId,
  updateStatus,
};
