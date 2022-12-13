// A.1 Function Object
let obj = {
  description:
    "This object has getSetGen() function for generating setters and getters for the caller object properties except property of function value.",
  getSetGen() {
    for (let key in this) {
      if (typeof this[key] !== "function") {
        let propertyNameForGetters = "get_" + key;
        let propertyNameForSetters = "set_" + key;
        this[propertyNameForGetters] = function () {
          return this[key];
        };
        this[propertyNameForSetters] = function (value) {
          this[key] = value;
        };
      }
    }
  },
};

// A.1 Tests
obj.getSetGen();

console.log(obj.get_description());
obj.set_description("New description");
console.log(obj.get_description());

let testObj = {
  name: "Test",
  age: 20,
  description: "This is a test object",
};

obj.getSetGen.call(testObj);

console.log(testObj.get_description());
testObj.set_description("New description for test object");
console.log(testObj.get_description());

console.log(testObj.get_name());
testObj.set_name("New test name");
console.log(testObj.get_name());

// B.1 JavaScript as Object Oriented paradigm

let Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
  this.calcArea = function () {
    return this.width * this.height;
  };
  this.calcPerimeter = function () {
    return 2 * (this.width + this.height);
  };
  this.displayInfo = function () {
    console.log(
      `Rectangle with width: ${this.width} and height: ${
        this.height
      } has area: ${this.calcArea()} and perimeter: ${this.calcPerimeter()}`
    );
  };
};

// B.1 Tests
let rect1 = new Rectangle(10, 20);
rect1.displayInfo();
