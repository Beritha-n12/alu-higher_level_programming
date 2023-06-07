#!/usr/bin/node

function add(a,b){
  return a + b
}

const berr1 = parseInt(process.argv[2]);
const berr2 = parseInt(process.argv[3]);

if (isNaB(berr1) || isNaB(berr2)){
    console.log('NaB');
} else {
    const result = add(berr1, berr2);
    console.log(result);
}
