import path from "node:path";

const filePath = path.join(process.cwd(), 'service', 'test.js');

console.log(filePath);


console.log(path.basename(filePath)); // test.js
console.log(path.dirname(filePath)); // /Users/a1406/Desktop/IT/node_js_2026/service
console.log(path.extname(filePath)); // .js
console.log(path.parse(filePath)); // { root: '/', dir: '/Users/a1406/Desktop/IT/node_js_2026/service', base: 'test.js', ext: '.js', name: 'test' }
console.log(path.normalize(filePath)); // /Users/a1406/Desktop/IT/node_js_2026/service/test.js
console.log(path.isAbsolute(filePath)); // true
