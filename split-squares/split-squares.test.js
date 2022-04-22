"use strict";

const {
  dump,
  validate,
  simplify
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

describe("validate", function () {
  it("works with simple squares", function () {
    expect(validate(0)).toEqual(true);
    expect(validate(2)).toEqual(false);
  });

  it("works with split squares", function () {
    expect(validate([1, 1, 1, 1])).toEqual(true);
    expect(validate([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1])).toEqual(true);
    expect(validate(
      [1,
        [1, 0, 1, [0, [0, 0, 0, 0], 1, 1]],
        [1, 0, 1, 0],
        1])).toEqual(
          true);
    expect(validate([1, 1, 1, 1, 1])).toEqual(false);
    expect(validate([1, 0, [1, [0, 0, 0, 0, 1], 1, [1, 1, 1, 1]], 1])).toEqual(false);
    expect(validate([1, [1, 0, 1, [0, [0, 0, 0], 1, 1]], [1, 0, 1, 0], 1])).toEqual(false);

  });
});

describe("simplify", function () {
  it("works with simple squares", function () {
    expect(simplify(0)).toEqual(0);
  });

  it("works with split squares", function () {
    expect(simplify([1, 1, 1, 1])).toEqual(1);
    expect(simplify([0, 0, 0, 0])).toEqual(0);
    expect(simplify([1, 0, 1, 0])).toEqual([1, 0, 1, 0]);
    expect(simplify([1, 0, 1, [1, 1, 1, 1]])).toEqual([1, 0, 1, 1]);
    expect(simplify([1, 1, 1, [1, 1, 1, 1]])).toEqual(1);
    expect(simplify([[1, 1, 1, 1], [1, 1, 1, 1], 1, 1])).toEqual(1);
    expect(
      simplify(
        [1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1]
      )
    ).toEqual(
      [1, 0, [1, 0, 1, 1], 1]
    );


  });
});