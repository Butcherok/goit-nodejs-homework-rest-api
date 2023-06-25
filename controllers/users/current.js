const { ctrlWrapper } = require("../../utilities");

const getCurrent = async (req, res) => {
  const { email, subscription } = req.user;
  res.json({ user: { email, subscription } });
};

module.exports = {
  getCurrent: ctrlWrapper(getCurrent),
};
