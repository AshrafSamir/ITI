// const { sum, convertToArray, checkPositivity } = require("../oldIndex");
// const { assert, expect } = require("chai");
// const should = require("chai").should();

// describe("test sum function", () => {
//   before(() => {
//     console.log("before");
//   });
//   after(() => {
//     console.log("after");
//   });
//   beforeEach(() => {
//     console.log("beforeEach");
//   });
//   afterEach(() => {
//     console.log("afterEach");
//   });
//   it("sum with positive numbers", () => {
//     assert.equal(sum(2, 2), 4);
//     expect(sum(1, 1)).to.equal(2);
//     sum(5, 5).should.equal(10);
//   });
//   it("sum with negative numbers", () => {
//     assert.equal(sum(-1, -5), -6);
//     expect(sum(-5, -3)).to.equal(-8);
//     sum(-1, -3).should.to.equal(-4);
//   });
//   it("sum with string", () => {
//     assert.throw(() => sum("ggg", 55), TypeError, "nums only");
//     expect(() => sum("hh", "kkk")).throw(TypeError, "nums only");
//     (() => sum("hhh", "uuu")).should.Throw(TypeError, "nums only");
//   });
// });

// describe("test convertToArray function", () => {
//   it("convertToArray with assert", () => {
//     //? assert does not allow chaining
//     assert.isArray(convertToArray(2, 5, 8));
//     assert.lengthOf(convertToArray(5, 6, 8), 3);
//     assert.include(convertToArray(2, 8, 5), 2);
//   });
//   it("convertToArray with expect", () => {
//     expect(convertToArray(5, 8, 7))
//       .to.be.an("array")
//       .to.have.lengthOf(3)
//       .that.includes(8);
//   });
//   it("convertToArray with should", () => {
//     convertToArray(5, 8, 1)
//       .should.to.be.an("array")
//       .to.have.lengthOf(3)
//       .that.includes(1);
//   });
// });

// //& TDD
// describe("TDD study", () => {
//   it("checkPositivity with pos param", () => {
//     expect(checkPositivity(5)).equal(true);
//   });
// });

// // setTimeout(() => {
// //     run()
// // }, 1000);

// //~ https://www.chaijs.com/api/assert/