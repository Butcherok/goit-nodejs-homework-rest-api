const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");

const { HttpError, ctrlWrapper } = require("../../utilities");

const { SECRET_KEY } = process.env;

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

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) throw HttpError(401, "Email or password is wrong");

  const isPassValid = await bcrypt.compare(password, user.password);

  if (!isPassValid) throw HttpError(401, "Email or password is wrong");

  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "24h" });

  res.status(200).json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
};
