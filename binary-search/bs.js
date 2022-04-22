"use strict";

/**
 * Accepts an array and desired value, returning the index
 * at which the value exists in the array (and -1 if it
 * does not exist).
 *
 * iterativeBinarySearch([1,2], 2) => 1
 * iterativeBinarySearch([1,2], 7) => -1
 */
function iterativeBinarySearch(arr, val) {

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {

    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {

      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {

      rightIdx = middleIdx - 1;
    } else {

      return middleIdx;
    }
  }

  return -1;
}

/**
 * Accepts an array and desired value, returning the index
 * at which the value exists in the array (and -1 if it
 * does not exist).
 *
 * iterativeBinarySearch([1,2], 2) => 1
 * iterativeBinarySearch([1,2], 7) => -1
 */
function recursiveBinarySearch(arr, val, left = 0, right = arr.length) {

  //base case, when do we stop recursing
  if (left > right) {
    console.log("got here");
    return -1;
  }

  let midpoint = Math.floor((left + right) / 2);

  if (arr[midpoint] === val) {
    return midpoint;
  }
  else if (arr[midpoint] > val) {
    return recursiveBinarySearch(arr, val, left, midpoint - 1);
  }

  return recursiveBinarySearch(arr, val, midpoint + 1, right);

}

module.exports = {
  iterativeBinarySearch,
  recursiveBinarySearch
};