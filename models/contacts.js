const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("models", "contacts.json");

const updateContacts = async (contacts) =>
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (err) {
    console.log(`Something went very wrong.. ${err.message}`);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const filterContacts = contacts.find((contact) => contact.id === contactId);
    console.log("filt", filterContacts);
    return filterContacts || null;
    // console.table(filterContacts);
  } catch (err) {
    console.log(`Something went very wrong.. ${err.message}`);
  }
};

const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const filterContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );

    console.table(filterContacts);

    await fs.writeFile(contactsPath, JSON.stringify(filterContacts, null, 4));
  } catch (err) {
    console.log(`Something went very wrong.. ${err.message}`);
  }
};

const addContact = async (data) => {
  try {
    const contacts = await listContacts();
    console.log(contacts);
    const newContact = {
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100).toString(),
      ...data,
    };
    contacts.push(newContact);
    // const newContactsList = [...contacts, ...newContact];

    await updateContacts(contacts);
    return newContact;
  } catch (err) {
    console.log(`Something went very wrong.. ${err.message}`);
  }
};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
