"use strict";


/**
 * Given a square, represented as either a plain integer
 * or in the case of a split square, an array of integers,
 * return a string of the square. ex:
 * dump(0) // 0
 * dump(1) // 1
 * dump([0, 1, 0, 1])  // 0 1 0 1
 * dump([0, 0, 0, [1, 1, 1, 1]]) // 0 0 0 1 1 1 1
 *
*/
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


// Function takes a square/split square, and returns true if it is valid,
// and false if it is not.
function validate(square) {

  if (typeof (square) === "number") {
    return (square === 0 || square === 1);
  }

  //progress, if square is an array
  // first check that it's exactly the correct length (fail fast if not)
  // if so, loop through array and for each subsquare,
  // call validate and check for false result (fail fast if so)

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




module.exports = {
  dump,
  validate
};