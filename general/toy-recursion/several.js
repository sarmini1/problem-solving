/** product: calculate the product of an array of numbers. */

function product(nums) {

  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, longestLength = 0) {

  if (words.length === 0) {
    return longestLength;
  }

  if (words[0].length > longestLength) {
    longestLength = words[0].length;
  }
  debugger;
  longestLength = longest(words.slice(1), longestLength);
  return longestLength;

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {

  if (str === "") {
    return "";
  }

  return str[0] + everyOther(str.slice(2));

}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {

  if (arr.length === 0) {
    return false;
  }

  if (arr[0] === val) {
    return true;
  }

  return find(arr.slice(1), val);

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  if (str.length < 2) {
    return true;
  }

  //need to compare first and last letter
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, str.length - 1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

  if (str === "") {
    return "";
  }

  return revString(str.slice(1)) + str[0];

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

  if (arr.length === 0) {
    return -1;
  }

  if (arr[0] === val) {
    return 0;
  }

  const got = findIndex(arr.slice(1), val);

  return got === -1 ? -1 : got + 1;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  const collected = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      collected.push(obj[key]);
    }
    else {
      let test = gatherStrings(obj[key]);
      collected.push(...test);
    }
  }

  return collected;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

  if (arr.length === 0) {
    return -1;
  }
  debugger;
  const midIdx = Math.floor((arr.length - 1) / 2);
  let got;

  if (arr[midIdx] === val) {
    return midIdx;
  }
  else if (arr[midIdx] > val) {
    got = binarySearch(arr.slice(0, midIdx - 1), val);
  }
  else {
    got = binarySearch(arr.slice(midIdx + 1), val);
  }

  return got === -1 ? -1 : got + Math.round(arr.length / 2);
}

// you might find this problem easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
