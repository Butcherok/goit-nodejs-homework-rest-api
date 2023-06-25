const { HttpError, ctrlWrapper } = require("../../utilities");

const { Contact } = require("../../models/contacts/contact");

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

const getById = async (req, res) => {
  const { contactId } = req.params;
  console.log(req.params);
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const add = async (req, res) => {
  const { id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

const delBiId = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

const updateBiId = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateStatus = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  delBiId: ctrlWrapper(delBiId),
  updateBiId: ctrlWrapper(updateBiId),
  updateStatus: ctrlWrapper(updateStatus),
};
