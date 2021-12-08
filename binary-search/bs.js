"use strict";

//iteratively

function iterativeBinarySearch(arr, val) {

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      // middleVal is too small, look at the right half
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      // middleVal is too large, look at the left half
      rightIdx = middleIdx - 1;
    } else {
      // we found our value!
      return middleIdx;
    }
  }

  // left and right pointers crossed, val isn't in arr
  return -1;
}

// recursively
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
  // else if (arr[midpoint] < val) {
    return recursiveBinarySearch(arr, val, midpoint + 1, right);
  // }

}

module.exports = {
  iterativeBinarySearch,
  recursiveBinarySearch
};