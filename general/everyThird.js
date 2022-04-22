"use strict";

/**
 * Accepts an array of numbers, an index with a default of 2,
 * and an array to hold every third number, empty by default. Returns given
 * last argument array containing every third number from the original.
 * Utilizes recursion.
 */
function everyThird(nums, idx = 2, thirdNums = []) {
  //Stop recursing when we exceed the given array's length
  if (idx >= nums.length) {
    return thirdNums;
  }

  thirdNums.push(nums[idx]);

  return everyThird(nums, idx + 3, thirdNums);
}

module.exports = everyThird;