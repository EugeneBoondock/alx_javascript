#!/usr/bin/node
function incrementAndCall (number, theFunction) {
    if (number > 0) {
      incrementAndCall(number - 1, theFunction);
      theFunction();
    }
  }
  
  module.exports.incrementAndCall = incrementAndCall;
  