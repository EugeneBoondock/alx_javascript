#!/usr/bin/node
//class for Rectangle
class Rectangle {
    // Script defines rectangle
    constructor (w, h) {
        this.width = w;
        this.height = h;

        if(w == 0 || h == 0 || isNaN(w) || isNaN(h)) {

            return {};
        }
    }
    }
    
    module.exports = Rectangle;