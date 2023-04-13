const { MathUtils, obj, sayHelloWorld } = require("../index");

describe("test MathUtils function", () => {
  var math1;
  beforeEach(() => {
    math1 = new MathUtils();
  });
  it("test MathUtils sum", () => {
    expect(math1.sum(2, 5)).toEqual(7);
    expect(math1.sum(2, 5)).toBe(7);
    expect(math1.sum(2, 5)).toEqual(jasmine.any(Number));
  });
});

describe("study diff btn toEqual and toBe", () => {
  var user = { id: 1 };
  var a = { x: user };
  var b = { x: user };
  it("", () => {
    expect(a).toEqual(b);
    //  expect(a).toBe(b)  //? test value with ref
  });
});

describe("study spyOn", () => {
  it("", () => {
    spyOn(obj, "hello");
    sayHelloWorld(obj);
    expect(obj.hello).toHaveBeenCalled();
    expect(obj.hello).toHaveBeenCalledTimes(1);
    expect(obj.hello).toHaveBeenCalledWith(3);
    expect(obj.hello).toHaveBeenCalledOnceWith(3);
  });
});

describe("create custom matcher", () => {
  beforeEach(() => {
    jasmine.addMatchers({
      toBeLarge: function () {
        return {
          compare: function (actual) {
            let result = {};
            result.pass = actual > 5000;
            result.message = "num must be > 5000";
            return result;
          },
        };
      },
    });
  });
  it("", () => {
    expect(60000).toBeLarge();
  });
});

describe("delay in jasmine ", () => {
  beforeAll(() => {
    jasmine.clock().install();
  });
  afterAll(() => {
    jasmine.clock().uninstall();
  });
  it("", () => {
    var x = 5;
    setTimeout(() => {
      x = 10;
    }, 3000);
    jasmine.clock().tick(6000);
    expect(x).toEqual(10);
  });
});

describe("test subtract", () => {
  var math1;
  beforeEach(() => {
    math1 = new MathUtils();
  });
  it("test MathUtils subtract", () => {
    expect(math1.substract(5, 2)).toEqual(3);
    expect(math1.substract(5, 2)).toBe(3);
    expect(math1.substract(5, 2)).toEqual(jasmine.any(Number));
  });
});

describe("test multiply", () => {
  var math1;
  beforeEach(() => {
    math1 = new MathUtils();
  });
  it("test MathUtils multiply", () => {
    expect(math1.multiply(5, 2)).toEqual(10);
    expect(math1.multiply(5, 2)).toBe(10);
    expect(math1.multiply(5, 2)).toEqual(jasmine.any(Number));
  });
});

describe("test divide", () => {
  var math1;
  beforeEach(() => {
    math1 = new MathUtils();
  });
  it("test MathUtils divide", () => {
    expect(math1.divide(10, 2)).toEqual(5);
    expect(math1.divide(10, 2)).toBe(5);
    expect(math1.divide(10, 2)).toEqual(jasmine.any(Number));
    expect(() => math1.divide(10, 0)).toThrow(
      new Error("Cannot divide by zero")
    );
  });
});

// test average
describe("test average", () => {
  var math1;
  beforeEach(() => {
    math1 = new MathUtils();
  });
  it("test MathUtils average", () => {
    expect(math1.average(10, 2)).toEqual(6);
    expect(math1.average(10, 2)).toBe(6);
    expect(math1.average(10, 2)).toEqual(jasmine.any(Number));
  });
});

describe("test factorial", () => {
  var math1;
  beforeEach(() => {
    math1 = new MathUtils();
  });
  it("test MathUtils factorial", () => {
    expect(math1.factorial(5)).toEqual(120);
    expect(math1.factorial(5)).toBe(120);
    expect(math1.factorial(5)).toEqual(jasmine.any(Number));
    expect(math1.factorial(5)).not.toEqual(jasmine.any(String));
    expect(() => math1.factorial(-5)).toThrow(
      new Error("There is no factorial for negative numbers")
    );
  });
});

describe("test checkPositivity", () => {
  var math1;
  beforeEach(() => {
    math1 = new MathUtils();
  });
  it("test return value", () => {
    expect(math1.checkPositivity(5)).toBe(true);
    expect(math1.checkPositivity(-5)).toBe(false);
  });
});
