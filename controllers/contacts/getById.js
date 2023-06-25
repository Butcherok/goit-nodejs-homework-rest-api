const { HttpError, ctrlWrapper } = require("../../utilities");

const { Contact } = require("../../models");

const getById = async (req, res) => {
  const { contactId } = req.params;
  console.log(req.params);
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getById: ctrlWrapper(getById),
};
