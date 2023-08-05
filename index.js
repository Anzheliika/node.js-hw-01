const argv = require('yargs').argv;
const contacts = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case 'get':
      const oneContact = await contacts.getContactById(id);
      console.table(oneContact);
      break;

    case 'add':
      const newContact = await contacts.addContact({ name, email, phone });
      console.table(newContact);
      break;

    case 'remove':
      const deleteContact = await contacts.removeContact(id);
      console.table(deleteContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
