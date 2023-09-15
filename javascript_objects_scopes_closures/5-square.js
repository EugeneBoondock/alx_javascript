#!/usr/bin/node

// Imports the Rectangle class
const Rectangle = require('./4-rectangle');

// Class for Square that inherits Rectangle
class Square extends Rectangle {
    constructor (size) {
        // Calls the constructor of Rectangle with size as width and height
        super(size, size);
    }
}