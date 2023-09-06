add = function() {};

add.prototype.log = function (a, b) {
  sum = a + b;
  return sum;
};
module.exports = new add(a, b);