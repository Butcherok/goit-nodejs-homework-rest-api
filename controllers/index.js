const {
  register,
  login,
  getCurrent,
  logout,
  subscriptionUpdate,
} = require("./users");

const {
  getAll,
  getById,
  add,
  delById,
  updateById,
  updateStatus,
} = require("./contacts");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  subscriptionUpdate,
  add,
  getAll,
  getById,
  delById,
  updateById,
  updateStatus,
};
