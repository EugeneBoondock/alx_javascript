#!/usr/bin/node
//class for Rectangle
class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
        this.isValid = true;
        
        if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
            // If w or h is not a positive integer or is 0, create an empty object
            this.isValid = false;
            return {};
      }
    }
  }
  
  module.exports = Rectangle;
  