import {readFile,writeFile} from 'fs/promises';

const filePath = new URL('./lorem.txt',import.meta.url);
let content = await readFile(filePath, {encoding: 'utf8'});

// const data = {
//     name: "Razz",
//     year: "2nd",
//     age: 22
// }
const data = {
    name: "Raj",
    year: "3rd",
    age: 22
}

for(const [key, value] of Object.entries(data)){
    content = content.replace(`{${key}}`, value);
}
// console.log(content);

await writeFile(new URL('./start.txt',import.meta.url),content);