import { watch, watchFile } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const BASE_PATH = dirname(fileURLToPath(import.meta.url));
const FILE = '../../data/test.txt';

const path = join(BASE_PATH, FILE);

// This function have some issues and low performance
watchFile(path, {}, (current, prev) => {
  console.log(new Date(), current, prev);
});

console.log('_________________________________');

// Also have some problems
watch(path, {}, (event, filename) => {
  console.log(new Date(), event, filename);
});

// To avoid the issues from before methods we can use https://www.npmjs.com/package/chokidar
