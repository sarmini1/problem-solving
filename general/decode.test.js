"use strict";

const decode = require("./decode");

describe("#decode", function () {
  it("returns correct string", function () {
    expect(decode("2abh0i17!")).toEqual("hi!");
  });

});