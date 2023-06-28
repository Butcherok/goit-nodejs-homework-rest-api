const path = require("path");
const fs = require("fs/promises");
const { User } = require("../../models");
const { ctrlWrapper } = require("../../utilities");
const { avatarDir } = require("../../constants");

const updateAvatar = async (req, res) => {
  const { id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${id}_${originalname}`;
  const resultUpload = path.join(avatarDir, filename);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(id, { avatarURL });

  res.json({
    avatarURL,
  })
};

module.exports = {
  updateAvatar: ctrlWrapper(updateAvatar),
};
