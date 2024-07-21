import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);
    const newDataArray = parsedData.slice(0, parsedData.length - 1);
    await fs.writeFile(PATH_DB, JSON.stringify(newDataArray, null, 2));
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
