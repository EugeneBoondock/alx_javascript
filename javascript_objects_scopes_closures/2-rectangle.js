#!/usr/bin/node
//class for Rectangle
class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            // If w or h is not a positive integer or is 0, create an empty object
            this.width = w;
            this.height = h;
            return {};
      }else{
        Object.assign(this, {});
      }
    }
  }
  
  module.exports = Rectangle;
