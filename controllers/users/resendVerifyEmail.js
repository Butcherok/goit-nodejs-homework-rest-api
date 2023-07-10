const { ctrlWrapper, HttpError, sendEmail } = require('../../utilities');
const { User } = require('../../models');

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, 'User not found');
  }
  if (user.verify) {
    throw HttpError(400, 'Verification has already been passed');
  }
  const verifyEmail = {
    to: email,
    from: 'butcherokmir4@gmail.com',
    subject: 'Verify your email',
    html: `<p>Please click on the link below to verify your email</p>
    <a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Verify</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(200).json({ message: 'Verification email sent' });
};

module.exports = {
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
};
