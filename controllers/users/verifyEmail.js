const { ctrlWrapper, HttpError } = require('../../utilities');
const { User } = require('../../models');

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw HttpError(404, 'User not found');
  }
  await User.findByIdAndUpdate(user.id, {
    verify: true,
    verificationToken: '',
  });

  res.status(200).json({ message: 'Verification successful' });
};

module.exports = {
  verifyEmail: ctrlWrapper(verifyEmail),
};
