#!/usr/bin/node

// inherits from Square
const BaseSquare = require('./5-square');

// Class extends from BaseSquare
class Square extends BaseSquare {
    constructor(size) {
        super(size);
    }

    charPrint(c) {
        if (c === undefined) {
            c = 'X';
        }

        for (let i = 0; i < this.height; i++) {
            console.log(c.repeat(this.width));
        }
    }
}

module.exports = Square;
