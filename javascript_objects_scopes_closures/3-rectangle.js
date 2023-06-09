#!/usr/bin/Node
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) //return empty if height and width is invalid
    this.width = w;
    this.height = h;
  }

  print () {
    if (this.width < 0 || this.height < 0) {
      return;
    }
    const row = 'X'.repeat(this.width);
    for (let i = 0; i < this.height; i++) {
      console.log(row);
    }
  }  
};
  