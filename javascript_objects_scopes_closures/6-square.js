#!/usr/bin/node

const Square = require('./5-square.js')

class Square extends Square () {
    constructor (size) {
        super(size, size);
    }

    charPrint(c) {
        if (this.size && this.size) {
            for (let i = 0; i < this.size; i++) {
                console.log('C'.repeat(this.size));
            }
        }
        if (c == undefined) {
            if (this.size && this.size) {
                for (let i = 0; i < this.size; i++) {
                    console.log('X'.repeat(this.size));
                }
            }
        }
    }
}

module.exports = Square;
