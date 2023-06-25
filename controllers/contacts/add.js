const { ctrlWrapper } = require("../../utilities");

const { Contact } = require("../../models");

const add = async (req, res) => {
  const { id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = {
  add: ctrlWrapper(add),
};
