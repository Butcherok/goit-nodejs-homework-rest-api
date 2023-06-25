const bcrypt = require("bcryptjs");
const { User } = require("../../models");

const { HttpError, ctrlWrapper } = require("../../utilities");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) throw HttpError(409, "Email in use");

  const hashPass = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPass });

  res.status(201).json({
    email: newUser.email,
    password: newUser.password,
  });
};

module.exports = {
  register: ctrlWrapper(register),
};
