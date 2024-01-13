"use strict";

/** merge
 *
 * Takes in two sorted arrays, a and b
 * Returns one new array containing both input arrays in sorted order. Does
 * not mutate input arrays.
 *
 *  @param {array} a
 *  @param {array} b
 *
 * ([1], [2]) => [1, 2]
 * ([3, 4, 5], [1, 2])) => [1, 2, 3, 4, 5]
 */
function merge(a, b) {

  const combined = [];
  let pointerA = 0;
  let pointerB = 0;

  // Start at the beginning of both arrays.
  // If the pointerA value is less than or equal to pointerB value,
  // push pointerA value to combined array and incremement pointerA.
  // Otherwise, push pointerB value to combined arry and increment pointerB.

  // If one of the arrays becomes exhausted, we add the remaining values from the
  // other array to our output array.

  while (pointerA < a.length && pointerB < b.length) {
    if (a[pointerA] <= b[pointerB]) {
      combined.push(a[pointerA]);
      pointerA++;
    }
    else {
      combined.push(b[pointerB]);
      pointerB++;
    }
  }
  // if we've exhausted our a array, push all remaining values from b
  if (pointerA === a.length) {
    while (pointerB < b.length) {
      combined.push(b[pointerB]);
      pointerB++;
    }
  }
  // if we've exhausted b
  if (pointerB === b.length) {
    while (pointerA < a.length) {
      combined.push(a[pointerA]);
      pointerA++;
    }
  }

  return combined;
}

/** mergeSort
 *
 * Accepts an unsorted array of integers and returns new array of sorted integers.
 * Does not mutate input array.
 *
 * @param {array} unsorted
 *
 * [4, 20, 12, 10, 7, 9] => [4, 7, 9, 10, 12, 20]
 *
 */
function mergeSort(unsorted) {

  if (unsorted.length <= 2) {
    if (unsorted.length === 1) {
      return unsorted;
    }
    else {
      return merge([unsorted[0]], [unsorted[1]]);
    }
  }

  const midpoint = Math.floor((unsorted.length) / 2);
  let firstHalf = unsorted.slice(0, midpoint);
  let secondHalf = unsorted.slice(midpoint);

  // If both halves are greater than 1 in length, we need to split them again
  firstHalf = mergeSort(firstHalf);
  secondHalf = mergeSort(secondHalf);

  const sorted = merge(firstHalf, secondHalf);
  return sorted;
}

module.exports = { merge, mergeSort };