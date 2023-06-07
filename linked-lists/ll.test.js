"use strict";

const LinkedList = require("./ll");

describe("push", function () {
  it("appends node and increments length", function () {
    let lst = new LinkedList();

    lst.push(5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);

    lst.push(10);
    expect(lst.length).toBe(2);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.val).toBe(10);
    expect(lst.tail.val).toBe(10);

    lst.push(15);
    expect(lst.length).toBe(3);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.val).toBe(10);
    expect(lst.tail.val).toBe(15);
  });
});

describe("sum", function () {
  it("calculates the sum of a populated list correctly", function () {
    let lst = new LinkedList([5, 10]);

    expect(lst.sum()).toBe(15);
  });

  it("calculates the sum of an empty list correctly", function () {
    let lst = new LinkedList();

    expect(lst.sum()).toBe(0);
  });
});