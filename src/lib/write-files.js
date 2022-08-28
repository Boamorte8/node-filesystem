import { constants, createWriteStream } from 'fs';
import { appendFile, mkdir, open, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const BASE_PATH = dirname(fileURLToPath(import.meta.url));
const FILE = '../../data/test2.txt';
const DIR = '../../data/example';

const path = join(BASE_PATH, FILE);
const dirPath = join(BASE_PATH, DIR);

// This delete previous data before write
await writeFile(path, 'Hello world!');

// This add to the end of the file the new data
await appendFile(path, 'Again Hello world!');

console.log('_________________________________');

const fileHandler = await open(path, constants.O_WRONLY);

// This write method writes over the existing data from position 0
await fileHandler.write('Hello');
await fileHandler.write(' world!');

console.log('_________________________________');

// const fileWriteStream = createWriteStream(path, { start: 0, end: 100 });
const fileWriteStream = createWriteStream(path);

fileWriteStream.write('Other new text');

console.log('_________________________________');

// recursive property is to tell to mkdir to create all the tree of folders
// await mkdir(dirPath, { recursive: true });
await mkdir(dirPath);

console.log('_________________________________');
