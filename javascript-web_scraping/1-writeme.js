#!/usr/bin/node
const fs = require('fs');

function writeFile(filePath, content) {
  fs.writeFile(filePath, content, { encoding: 'utf-8' }, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Written File');
    }
  });
}

if (process.argv.length < 4) {
  console.log(filepath);
} else {
  const filePath = process.argv[2];
  const content = process.argv[3];
  writeFile(filePath, content);
}
