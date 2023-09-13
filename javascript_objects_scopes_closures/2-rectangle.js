#!/usr/bin/node
//class for Rectangle
class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
        
        if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
            // If w or h is not a positive integer or is 0, create an empty object
            return {};
      }
    }
  }
  
  module.exports = Rectangle;
  