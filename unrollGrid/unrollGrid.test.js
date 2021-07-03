"use strict";

const unrollGrid = require("./unrollGrid");

const smallestSquare = [
  ["a", "b"],
  ["z", "y"]
];

const smallerSquare = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];

const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const bigSquare = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];


describe("#unrollGrid", function () {

  it("is a function", function () {
    expect(typeof unrollGrid).toEqual("function");
  });

  it("works for 2x2 grid", function () {
    expect(unrollGrid(smallestSquare)).toEqual(
      ["a", "b", "y", "z"]);
  })

  it("works for 3x3 grid", function () {
    expect(unrollGrid(smallerSquare)).toEqual(
      ["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  })

  it("works for 4x4 grid", function () {
    expect(unrollGrid(square)).toEqual(
      [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  })

  it("works for 5x5 grid", function () {
    expect(unrollGrid(bigSquare)).toEqual(
      [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21,
        16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
  })

});
