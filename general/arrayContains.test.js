"use strict";

const arrayContains = require("./arrayContains");

describe("#arrayContains", function () {
  it("compares nested objects etc", function () {
    let nums = [1, 2, 3, 7, 9];
    expect(arrayContains(nums, 7)).toBe(true);

    nums = [1, 2, 3, 7, 9, [2093, 239, 2]];
    expect(arrayContains(nums, 2)).toBe(true);

    nums = [1, 2, 3, 7, 9, [2093, [1, 2, 18], 2]];
    expect(arrayContains(nums, 18)).toBe(true);

    nums = [1, 2, 3, 9];
    expect(arrayContains(nums, 7)).toBe(false);

    nums = [1, [1, [1, 7], 1]];
    expect(arrayContains(nums, 7)).toBe(true);

    nums = [1, [1, 2, [1, 2]]];
    expect(arrayContains(nums, 7)).toBe(false);
  });

  it("works when value is another primitive type", function () {
    let nums = ["hello", [1, 2, [1, 2]]];
    expect(arrayContains(nums, "hello")).toBe(true);

    nums = [1, [1, [1, undefined], 1]];
    expect(arrayContains(nums, undefined)).toBe(true);

    nums = [1, [1, [1, undefined], 1]];
    expect(arrayContains(nums, "not there")).toBe(false);

    nums = [1, [1, [1, false], 1]];
    expect(arrayContains(nums, true)).toBe(false);

    nums = [1, [1, [1, false], 1]];
    expect(arrayContains(nums, false)).toBe(true);
  });

  it("returns false with empty inner/outer array", function () {
    let nums = [[]];
    expect(arrayContains(nums, 7)).toBe(false);

    nums = [];
    expect(arrayContains(nums, 7)).toBe(false);
  });

  it("returns false when no value is provided", function () {
    let nums = [1, 2, 3];
    expect(arrayContains(nums)).toBe(false);

    nums = [1, 2, [1, 2, 3]];
    expect(arrayContains(nums)).toBe(false);

    nums = [];
    expect(arrayContains(nums)).toBe(false);
  });
});