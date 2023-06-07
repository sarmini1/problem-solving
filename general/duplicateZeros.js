"use strict";


/**
 * Given a fixed-length integer array nums, duplicate each occurrence of zero,
 * shifting the remaining elements to the right. Mutates the input array and
 * does not return it. Returns undefined.
 *
 * @param {*} nums
 */
function duplicateZeros(nums) {

  const originalLength = nums.length;

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] === 0) {
      nums.splice(i, 0, 0);
      i++;
    }
  }

  const difference = nums.length - originalLength;
  nums.splice(nums.length - (difference), difference);

}

module.exports = duplicateZeros;