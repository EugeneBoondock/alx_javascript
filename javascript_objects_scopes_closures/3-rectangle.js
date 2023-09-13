#!/usr/bin/node
//class for Rectangle
class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        Object.assign(this, {});
      }
    }
  
    // Define an instance method
    instmethod() {
      if (this.width && this.height) {
        for (let i = 0; i < this.height; i++) {
          console.log('X'.repeat(this.width));
        }
      }
    }
  }
  
  module.exports = Rectangle;
  
