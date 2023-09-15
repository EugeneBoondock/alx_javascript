#!/usr/bin/node

// Class for Rectangle
class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        Object.assign(this, {});
      }
    }
  
    // Define an instance method called print()
    print() {
      if (this.width && this.height) {
        for (let i = 0; i < this.height; i++) {
          console.log('X'.repeat(this.width));
        }
      }
    }

    rotate() {
        const temp = this.width;
        this.width = this.height;
        this.height = temp;
    }
    

    double() {
        if (this.width && this.height) {
            for (let i = 0; i < this.height * 2; i++) {
                console.log('X'.repeat(this.width * 2))
            }
        }
    }
  }
  
  module.exports = Rectangle;
  