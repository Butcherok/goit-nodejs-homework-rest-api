const { register } = require("./register");
const { login } = require("./login");
const { logout } = require("./logout");
const { getCurrent } = require("./current");
const { subscriptionUpdate } = require("./subscriptionUpdate");
const { updateAvatar } = require("./updateAvatar");

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  subscriptionUpdate,
  updateAvatar,
};
