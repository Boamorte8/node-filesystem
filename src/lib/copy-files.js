import { copyFile, rename } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const BASE_PATH = dirname(fileURLToPath(import.meta.url));
const FILE = '../../data/test.txt';
const END_FILE = '../../data/example/text.txt';

const path = join(BASE_PATH, FILE);
const endPath = join(BASE_PATH, END_FILE);

// Only copy files
await copyFile(path, endPath);

console.log('_________________________________');

// To rename or move a file we use the same method

await rename(path, endPath);

// To copy folders fs does not have a method but exist a library for this https://www.npmjs.com/package/fs-extra
