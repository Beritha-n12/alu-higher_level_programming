#!/usr/bin/node

const args = process.argv.slice(2);

if (args.length === 0){
    console.log('No argument');
} else if (args.length === 1);{
    console.log('Argument found');
} else (args.length === 3) {
    console.log('Arguments found');
}
