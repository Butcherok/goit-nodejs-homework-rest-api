const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");

const { HttpError, ctrlWrapper } = require("../../utilities");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) throw HttpError(401, "Email or password is wrong");

  const isPassValid = await bcrypt.compare(password, user.password);

  if (!isPassValid) throw HttpError(401, "Email or password is wrong");

  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "24h" });

  await User.findByIdAndUpdate(user.id, { token });

  res.status(200).json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = {
  login: ctrlWrapper(login),
};
