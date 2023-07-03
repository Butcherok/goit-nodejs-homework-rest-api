const multer = require("multer");
const { tempDir } = require("../constants");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
