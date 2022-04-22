"use strict";

const everyThird = require("./everyThird");

describe("#everyThird", function () {
  it("returns a new list of every third", function () {
    expect(everyThird([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([3, 6, 9]);
    expect(everyThird([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([3, 6]);
    expect(everyThird([1, 2, 3, 4, 5, 6, 7])).toEqual([3, 6]);
    expect(everyThird([1, 2, 3, 4, 5, 6])).toEqual([3, 6]);
    expect(everyThird([1, 2, 3, 4, 5])).toEqual([3]);
    expect(everyThird([1, 2, 3, 4])).toEqual([3]);
    expect(everyThird([1, 2, 3])).toEqual([3]);
    expect(everyThird([1, 2])).toEqual([]);
    expect(everyThird([1])).toEqual([]);
  });

  it("works for an empty array", function () {
    expect(everyThird([])).toEqual([]);
  })
});