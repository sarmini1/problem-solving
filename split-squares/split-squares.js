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


/** Function takes a square/split square, and returns true if it is valid,
 * and false if it is not.
 */
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

/** Takes in a square, could be an integer or an array,
 *  and returns the simplified version of it, also either an integer
 *  or an array.
 *
 * simplify([1, 1, 1, 1])  // 1
 * simplify([0, 0, 0, 0])   // 0
 * simplify([1, 0, 1, 0])  // [1, 0, 1, 0]
 * simplify([1, 0, 1, [1, 1, 1, 1]])  // [1, 0, 1, 1]
 *
 * @param {*} square
 */
function simplify(square) {

  if (typeof (square) === "number") {
    return square;
  }

  let simpleSquares = [];

  // we know square can now be simplified
  // loop through each subsquare
  for (let subsquare of square) {

    if (Array.isArray(subsquare)){
      let simplified = simplify(subsquare);
      // subsquare = simplified;
      simpleSquares.push(simplified)
    }

    // if the current subsquare is just an integer
    // add it to smaller array of subsquares so we can
    // check if it's a mixed square or not
    if (typeof (subsquare) === "number") {
      simpleSquares.push(subsquare);

      if (simpleSquares.length === 4) {
        let uniqueVals = new Set(simpleSquares);
        // if we have a mixed square, we can't simplify it
        // need to push this to the larger simpleSquares array
        if (uniqueVals.size !== 1) {
          return simpleSquares;
        }
        else {
          return subsquare;
        }
      }
      continue;
    }

    // if subsquare is an ARRAY
    // we need to recurse and call simplify

    // if (typeof (simplified) === "number") {
    //   return simplified;
    // }
    // simpleSquares.push(simplified);
  }
  console.log("simplesquare return val", simpleSquares);
  return simpleSquares;

}



module.exports = {
  dump,
  validate,
  simplify
};


// if (typeof(square) === "number"){
//   return square;
// }

// let simpleSquares = [];

 //if square is an array
// // first check that array is not a mixed square
// // let uniqueSquareVals = new Set(square);
// // console.log(uniqueSquareVals);
// // if (uniqueSquareVals.size !== 1){
// //   //mixed squares cannot be simplified-- just return the square
// //   return square;
// // }

// console.log("above for loop");

// // we know square can now be simplified
// // loop through each subsquare
// for (let subsquare of square){
//   console.log("square is ", square);
//   let simplified = simplify(subsquare);

//   if (typeof(simplified) === "number"){
//     return simplified;
//   }
//   simpleSquares.push(simplified);
// }

// return simpleSquares;