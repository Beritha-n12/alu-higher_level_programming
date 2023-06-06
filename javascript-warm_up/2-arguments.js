#!/usr/bin/node

const beri = process.argv.length[2]; //exclude two statements

if (beri.length === 0){
    console.log("No argument");
} else if (beri.length === 1);{
    console.log("Argument found");
} else (beri.length === 3) {
    console.log("Arguments found");
}
