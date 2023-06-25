const { HttpError, ctrlWrapper } = require("../../utilities");

const { Contact } = require("../../models");

const delById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

module.exports = {
  delById: ctrlWrapper(delById),
};
