import { chmod } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const BASE_PATH = dirname(fileURLToPath(import.meta.url));
const FILE = '../index.js';

const path = join(BASE_PATH, FILE);

await chmod(path, 0o755);
