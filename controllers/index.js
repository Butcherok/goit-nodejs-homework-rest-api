const {
  register,
  login,
  getCurrent,
  logout,
  subscriptionUpdate,
  updateAvatar,
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
  updateAvatar,
  add,
  getAll,
  getById,
  delById,
  updateById,
  updateStatus,
};
