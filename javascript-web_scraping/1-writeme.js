#!/usr/bin/node
const fs = require('fs');

function writeFile(filePath, content) {
  fs.writeFile(filePath, content, 'utf-8', (err) => {
    if (err) {
      console.error(`Error occurred while writing to the file: ${err}`);
    } else {
      console.log('File written successfully.');
    }
  });
}

if (process.argv.length < 4) {
  console.log('Please provide the file path and content as arguments.');
} else {
  const filePath = process.argv[2];
  const content = process.argv[3];
  writeFile(filePath, content);
}
