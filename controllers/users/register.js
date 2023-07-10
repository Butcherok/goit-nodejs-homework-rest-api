const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');

const { User } = require('../../models');

const { HttpError, ctrlWrapper, sendEmail } = require('../../utilities');

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) throw HttpError(409, 'Email in use');

  const hashPass = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    password: hashPass,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    from: 'butcherokmir4@gmail.com',
    subject: 'Verify your email',
    html: `<p>Please click on the link below to verify your email</p>
    <a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Verify</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    email: newUser.email,
    password: newUser.password,
  });
};

module.exports = {
  register: ctrlWrapper(register),
};
