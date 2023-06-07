#!/usr/bin/node

function add(a,b) {
  return a + b;
}

const args1 = parseInt(process.argv[2]);
const args2 = parseInt(process.argv[3]);

if (isNaN(args1) || isNaN(args2)) {
    console.log('NaN');
} else {
    const result = add(berr1, berr2);
    console.log(result);
}
