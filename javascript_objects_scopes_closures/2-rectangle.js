#!/usr/bin/node
//class for Rectangle
class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0) {
            // If w or h is not a positive integer or is 0, create an empty object
            this.width = null;
            this.height = null;
      }else {
        this.width = w;
        this.height = h;
      }
    }
  }
  
  module.exports = Rectangle;
  