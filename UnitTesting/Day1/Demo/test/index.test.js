const { run } = require("mocha");
const { capitalizeText, createArray } = require("../index");
const { assert, expect } = require("chai");
const should = require("chai").should();

//? test that the function takes a string  it will return a string
//? test that the function takes a string and return it after capitalize it
//? test if the function takes number it will throw type error says parameter should be string

describe("test capitalizeText function", () => {
  it("takes string and return string", () => {
    assert.isString(capitalizeText("ashraf"));
    expect(capitalizeText("ashraf")).to.be.a("string");
    capitalizeText("ashraf").should.to.be.a("string");
  });

  it("takes string and return capitalized string", () => {
    assert.equal(capitalizeText("ashraf"), "ASHRAF");
    expect(capitalizeText("ashraf")).to.equal("ASHRAF");
    capitalizeText("ashraf").should.equal("ASHRAF");
  });

  it("Doesnt take a number only string", () => {
    assert.throw(
      () => capitalizeText(5),
      TypeError,
      "parameter should be string"
    );
    expect(() => capitalizeText(5)).throw(
      TypeError,
      "parameter should be string"
    );
    (() => capitalizeText(5)).should.Throw(
      TypeError,
      "parameter should be string"
    );
  });
});

//? test that the return value of type array
//? test if we pass 3 it will return array of length 3 and test it's include 1
//? try to delay the testing process 5 seconds
//? try to use different styles (expect , should , assert)
//? after finishing your test process try to  run it on a browser//bonus
//? make pending test case

describe("test createArray function", () => {
  it("returns array", () => {
    assert.isArray(createArray(3));
    expect(createArray(3)).to.be.a("array");
    createArray(3).should.to.be.a("array");
  });

  it("test if we pass 3 it will return array of length 3 and test it's include 1", () => {
    assert.isArray(createArray(3));
    assert.lengthOf(createArray(3), 3);
    assert.include(createArray(3), 1);
    expect(createArray(3))
      .to.be.an("array")
      .to.have.lengthOf(3)
      .that.includes(1);
    createArray(3)
      .should.to.be.an("array")
      .to.have.lengthOf(3)
      .that.includes(1);
  });

  it("Doesnt take a number only string", () => {
    assert.throw(
      () => capitalizeText(5),
      TypeError,
      "parameter should be string"
    );
    expect(() => capitalizeText(5)).throw(
      TypeError,
      "parameter should be string"
    );
    (() => capitalizeText(5)).should.Throw(
      TypeError,
      "parameter should be string"
    );
  });
});
setTimeout(() => {
  run();
}, 5000);
