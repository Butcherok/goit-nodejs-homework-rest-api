const {
  register,
  login,
  getCurrent,
  logout,
  subscriptionUpdate,
} = require("./users/users");

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
