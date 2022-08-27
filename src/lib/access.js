import { constants } from 'fs';
import { access, open, stat } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const BASE_PATH = dirname(fileURLToPath(import.meta.url));
const FILE = '../index.js';

const path = join(BASE_PATH, FILE);

// console.log(constants);

try {
  await access(path, constants.F_OK);

  const fileHandle = await open(path);
  // console.log('We have access to the file');
  console.log(await fileHandle.stat());
  console.log(await stat(path));
} catch (error) {
  console.log('No access to the file');
}
