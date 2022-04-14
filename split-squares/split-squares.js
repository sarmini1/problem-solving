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

  let dumped;

  for (let subsquare of square) {
    dumped += dump(subsquare);
  }

  return dumped;
}

let test1 = dump([0, 1, 0, 1]);  // 0 1 0 1
console.log("first test", test1);

let test2 = dump([0, 0, 0, [1, 1, 1, 1]]) // 0 0 0 1 1 1 1
console.log("second test", test2);
