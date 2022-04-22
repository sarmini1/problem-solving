"use strict";

/**
 * Accepts an array, a value, and an index, default of 0. Returns true/false
 * depending on whether the array contains that value,
 * even if nested in a sub-array.
 */
function arrayContains(nums, val, idx = 0) {
  //Stop recursing if we reach the end of the array
  if (idx >= nums.length) {
    return false;
  }

  if (nums[idx] === val) {
    return true;
  }
  else if (Array.isArray(nums[idx])) {
    return arrayContains(nums[idx], val, idx = 0);
  }

  return arrayContains(nums, val, idx + 1);
}

module.exports = arrayContains;