import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// ABSOLUTE
console.log('Section Absolute');

// With commonjs you use __dirname and __filename properties
// console.log(__dirname, __filename)

// With ESM you use import.meta.url
console.log(import.meta.url);

const basePath = 'C:/';
const userPath = '/Users\\salazar/';
const userPath2 = 'Users\\salazar/';

console.log(join(basePath, userPath));
console.log(resolve(userPath2));
console.log(process.cwd());

console.log('_____________________________');

// RELATIVE
console.log('Section Relative');

const basePath2 = import.meta.url;
const relativePath = '..';
const custonDirname = dirname(fileURLToPath(basePath2));

console.log(basePath2, dirname(fileURLToPath(basePath2)));
console.log(join(custonDirname, relativePath));
