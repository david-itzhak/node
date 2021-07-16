// File system
const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), err => {
//   if (err){
//     throw err;
//   }
//   console.log('Dir was created');
// });

const filePath = path.join(__dirname, 'test', 'test.txt');

// fs.writeFile(filePath, 'Hello from a new file', err => {
//   if(err){
//     throw err
//   }
//   console.log('File was created');
// })

fs.writeFile(filePath, '\nHello again', err => {
  if(err){
    throw err
  }
  console.log('File was created');
})

fs.appendFile(filePath, '\nHello one more time', err => {
  if(err){
    throw err
  }
  console.log('File was created');
})

fs.readFile(filePath, (err , content) => {
  if(err){
    throw err;
  }
  console.log('Content: ', content);
})

fs.readFile(filePath, (err , content) => {
  if(err){
    throw err;
  }
  const data = Buffer.from(content);
  console.log('Content: ', data.toString());
})

fs.readFile(filePath, 'utf-8', (err , content) => {
  if(err){
    throw err;
  }
  console.log('Content: ', content);
})

