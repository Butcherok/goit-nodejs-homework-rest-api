const { User } = require("../../models");

const { ctrlWrapper } = require("../../utilities");

const subscriptionUpdate = async (req, res) => {
  const { id } = req.user;
  const user = await User.findByIdAndUpdate(id, req.body);
  res.json({ user: { email: user.email, subscription: user.subscription } });
};

module.exports = {
  subscriptionUpdate: ctrlWrapper(subscriptionUpdate),
};
