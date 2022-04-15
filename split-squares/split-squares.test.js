"use strict";

const {
  dump,
  validate
} = require("./split-squares");

describe("dump", function () {
  it("works with simple squares", function () {
    expect(dump(0)).toEqual("0");
    expect(dump(1)).toEqual("1");
  });

  it("works with split squares", function () {
    expect(dump([0, 1, 0, 1])).toEqual("0 1 0 1");
    expect(dump([0, 0, 0, [1, 1, 1, 1]])).toEqual("0 0 0 1 1 1 1");
    expect(
      dump([0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]])).toEqual(
        "0 0 0 1 1 1 0 0 0 1 1 1 1"
      );
  });
});

// describe("validate", function () {
//   it("should find the index of a value in a sorted array", function () {
//     expect(recursiveBinarySearch([1, 2, 3, 4], 4)).toEqual(3);
//     expect(recursiveBinarySearch([1, 2], 1)).toEqual(0);
//     expect(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7], 6)).toEqual(5);
//   });

//   it("should return -1 if the value is not found", function () {
//     expect(recursiveBinarySearch([1, 2, 3, 4], 0)).toEqual(-1);
//     expect(recursiveBinarySearch([1, 2], 11)).toEqual(-1);
//   });
// });