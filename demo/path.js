const path = require('path');

console.log('File name', path.basename(__filename)); // path.js
console.log('Dir name', path.dirname(__filename)); // H:\WebstormProjects\node\demo
console.log('File extension', path.extname(__filename)); // .js
console.log('Parse', path.parse('__filename'));
// {
//   root: 'H:\\',
//     dir: 'H:\\WebstormProjects\\node\\demo',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path'
// }
console.log(path.join(__dirname, 'server', 'index.html')); // H:\WebstormProjects\node\demo\server\index.html