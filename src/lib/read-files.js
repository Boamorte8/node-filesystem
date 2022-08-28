// import { createReadStream } from 'fs';
import { open, readdir } from 'fs/promises';
// import { open, opendir, readdir } from 'fs/promises';
// import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const BASE_PATH = dirname(fileURLToPath(import.meta.url));
const FILE = '../../data/test.txt';
const DIR = '../../data';

const path = join(BASE_PATH, FILE);
const dirPath = join(BASE_PATH, DIR);

// This option to read a file have an issue. Exist the possibility that the file is bigger than the space on RAM
// const contentFile = await readFile(path);
// console.log(contentFile.toString());

const fileHandler = await open(path);

// This method is equal to the readFile from fs/promises
// console.log(fileHandler.readFile());
const firstRead = await fileHandler.read({ length: 30 });
console.log(firstRead.buffer.toString());

const secondRead = await fileHandler.read({ length: 50 });
console.log(secondRead.buffer.toString());

console.log('_________________________________');

const buffer1 = Buffer.alloc(20);
const buffer2 = Buffer.alloc(20);

// The read method affects the position of the readv for that reason is needed add the second parameter
await fileHandler.readv([buffer1, buffer2], 0);
console.log(buffer1.toString(), buffer2.toString());

console.log('_________________________________');

// const fileReadStream = fileHandler.createReadStream({ start: 0, end: 100 });
// const fileReadStream = createReadStream(path, { start: 0, end: 100 });

// This is like the same to listen data event
// fileReadStream.on('readable', () =>
//   console.log(fileReadStream.read()?.toString())
// );

// fileReadStream.on('readable', () =>
//   console.log(fileReadStream.read()?.toString())
// );

console.log('_________________________________');

const files = await readdir(dirPath);
console.log(files);
// const directoryObject = await opendir(dirPath);
// console.log(directoryObject.);
