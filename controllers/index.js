const {
  register,
  login,
  getCurrent,
  logout,
  subscriptionUpdate,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require('./users');

const {
  getAll,
  getById,
  add,
  delById,
  updateById,
  updateStatus,
} = require('./contacts');

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  subscriptionUpdate,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
  add,
  getAll,
  getById,
  delById,
  updateById,
  updateStatus,
};
