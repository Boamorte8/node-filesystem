import { rm, rmdir, unlink } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const BASE_PATH = dirname(fileURLToPath(import.meta.url));
const FILE = '../../data/test-delete.txt';
const DIR = '../../data/example';

const path = join(BASE_PATH, FILE);
const dirPath = join(BASE_PATH, DIR);

// Only for files
await unlink(path);

console.log('_________________________________');

// Only for empty folders
await rmdir(dirPath);

console.log('_________________________________');

await rm(dirPath, { recursive: true });
