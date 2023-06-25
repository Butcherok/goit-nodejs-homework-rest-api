const { ctrlWrapper } = require("../../utilities");

const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const { id: owner } = req.user;
  const { page = 1, limit = 10, favorite, search } = req.query;
  const skip = (page - 1) * limit;
  const response = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
    favorite,
    search,
  }).populate("owner", "email");
  res.json(response);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
