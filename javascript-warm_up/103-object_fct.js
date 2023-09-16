#!/usr/bin/node

const myObject = {
    type: 'object',
    value: 12,
    incr: function () {
      this.value++;
    },
    inspect: function () {
      return `{ type: '${this.type}', value: ${this.value}${this.incr ? `, incr: [Function]` : ''} }`;
    },
  };
  
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);
  