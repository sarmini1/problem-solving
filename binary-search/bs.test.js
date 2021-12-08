"use strict";

const {
  iterativeBinarySearch, 
  recursiveBinarySearch
} = require("./bs");

describe("iterative binarySearch", function () {
  it("should find the index of a value in a sorted array", function() {
    expect(iterativeBinarySearch([1, 2, 3, 4], 4)).toEqual(3);
    expect(iterativeBinarySearch([1, 2], 1)).toEqual(0);
    expect(iterativeBinarySearch([1, 2, 3, 4, 5, 6, 7], 6)).toEqual(5);
  });

  it("should return -1 if the value is not found", function() {
    expect(iterativeBinarySearch([1, 2, 3, 4], 0)).toEqual(-1);
    expect(iterativeBinarySearch([1, 2], 11)).toEqual(-1);
  });
});

describe("recursive binarySearch", function () {
  it("should find the index of a value in a sorted array", function() {
    expect(recursiveBinarySearch([1, 2, 3, 4], 4)).toEqual(3);
    expect(recursiveBinarySearch([1, 2], 1)).toEqual(0);
    expect(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7], 6)).toEqual(5);
  });

  it("should return -1 if the value is not found", function() {
    expect(recursiveBinarySearch([1, 2, 3, 4], 0)).toEqual(-1);
    expect(recursiveBinarySearch([1, 2], 11)).toEqual(-1);
  });
});