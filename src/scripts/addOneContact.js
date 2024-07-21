import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);
    const newContact = createFakeContact();
    parsedData.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), 'utf-8');
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
