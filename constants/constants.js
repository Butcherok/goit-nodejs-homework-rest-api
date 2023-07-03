const path = require("path");

const emailRegexp = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

const tempDir = path.join(__dirname, "../", "temp");

const avatarDir = path.join(__dirname, "../", "public", "avatars");

module.exports = { emailRegexp, tempDir, avatarDir };
