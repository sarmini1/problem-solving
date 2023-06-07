"use strict";

const duplicateZeros = require("./duplicateZeros");

describe("works", function () {
  it("calculates the sum of a populated list correctly", function () {
    let arr = [1,0,2,3,0,4,5,0]

    duplicateZeros(arr);
    expect(arr).toEqual([1,0,0,2,3,0,0,4]);
  });

});
