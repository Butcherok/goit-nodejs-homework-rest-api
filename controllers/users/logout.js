const { User } = require("../../models");

const { ctrlWrapper } = require("../../utilities");

const logout = async (req, res) => {
  const { id } = req.user;
  await User.findByIdAndUpdate(id, { token: "" });
  res.sendStatus(204);
};

module.exports = {
  logout: ctrlWrapper(logout),
};
