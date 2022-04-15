"use strict";


// A split square will use four lines:
// dump([0, 1, 0, 1])  // 0 1 0 1

// A nested split square will use one line per square:
// dump([0, 0, 0, [1, 1, 1, 1]]) // 0 0 0 1 1 1 1

// Of course, these can nested deeply and still work:
// dump([0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]]) // 0 0 0 1 1 1 0 0 0 1 1 1 1


// Given a square, represented as either a plain integer
// or in the case of a split square, an array of integers,
// return a string of the square
function dump(square) {

  if (typeof (square) === "number") {
    return square.toString();
  }

  let dumped = [];

  for (let subsquare of square) {
    dumped.push(dump(subsquare));
  }

  return dumped.join(" ");
}

// validate(0) // true
// A split square of four simple filled squares is valid:

// validate([1, 1, 1, 1]) // true

// validate(2) // false

// validate([1, 1, 1, 1, 1]) // false

// validate([1, 0, [1, [0, 0, 0, 0, 1], 1, [1, 1, 1, 1]], 1]) // false

// validate([1, [1, 0, 1, [0, [0, 0, 0], 1, 1]], [1, 0, 1, 0], 1]) // false


// Function takes a square/split square, and returns true if it is valid,
// and false if it is not.
function validate(square) {

  //base case
  if (typeof (square) === "number") {
    return (square === 0 || square === 1);
  }

  //progress, if square is an array
  // loop through array and for each subsquare,
  // call validate

  if (square.length !== 4) {
    return false;
  }

  for (let subsquare of square) {

    let result = validate(subsquare);
    if (!result) {
      return false;
    }
  }

  return true;
}

// let test1 = validate(0); // true
// console.log("true", test1);

// let test2 = validate([1, 1, 1, 1]) // true
// console.log("true", test2);

// let test3 = validate(2) // false
// console.log("false", test3);

// let test4 = validate([1, 1, 1, 1, 1]) // false
// console.log("false", test4);

// let test5 = validate([1, 0, [1, [0, 0, 0, 0, 1], 1, [1, 1, 1, 1]], 1]) // false
// console.log("false", test5);

// let test6 = validate([1, [1, 0, 1, [0, [0, 0, 0], 1, 1]], [1, 0, 1, 0], 1]) // false
// console.log("false", test6);

// let test7 = validate([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1]); // true
// console.log("true 7", test7);

// let test8 = validate([1,
//          [1, 0, 1, [0, [0, 0, 0, 0], 1, 1]],
//          [1, 0, 1, 0],
//          1]);  // true
// console.log("true test 8", test8);

module.exports = {
  dump,
  validate
};