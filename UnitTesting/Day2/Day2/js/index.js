MathUtils = function () {};

MathUtils.prototype.sum = function (number1, number2) {
  return number1 + number2;
};

MathUtils.prototype.substract = function (number1, number2) {
  return number1 - number2;
};

MathUtils.prototype.multiply = function (number1, number2) {
  return number1 * number2;
};

MathUtils.prototype.divide = function (number1, number2) {
  if (number2 == 0) {
    throw new Error("Cannot divide by zero");
  }
  return number1 / number2;
};

MathUtils.prototype.average = function (number1, number2) {
  return (number1 + number2) / 2;
};

MathUtils.prototype.factorial = function (number) {
  if (number < 0) {
    throw new Error("There is no factorial for negative numbers");
  } else if (number == 1 || number == 0) {
    return 1;
  } else {
    return number * this.factorial(number - 1);
  }
};

MathUtils.prototype.checkPositivity = function (number) {
  if (number < 0) return false;
  else return true;
};

var obj = {
  hello: function () {
    return "hello";
  },

  world: function () {
    return "world";
  },
};

function sayHelloWorld(x) {
  return x.hello(3) + " " + x.world();
}

module.exports = { MathUtils, obj, sayHelloWorld };
