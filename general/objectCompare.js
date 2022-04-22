"use strict";

/**
 * Accepts two objects (either arrays or POJOs) and
 * returns true/false depending on if those two objects
 * contain all the same values.
 */
function objectCompare(obj1, obj2) {
  // Fail fast if obj1 or obj2 aren't provided, if at least one of them
  // isn't an object, or if their isArray boolean values don't match.
  if (!obj1 || !obj2) {
    return false;
  }
  else if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  }
  else if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    return false;
  }

  // If we make it to this point, we should know that both obj1 and obj2
  //  are the same type of object.

  //If our current objects are POJOs
  if (!Array.isArray(obj1)) {
    //Fail fast and make sure both objects have the same keys array length
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    else {
      for (let key in obj1) {
        // If we've finally reached a value that isn't an object
        if (typeof obj1[key] !== "object") {
          if (obj1[key] !== obj2[key]) {
            return false;
          }
          else {
            continue;
          }
        }
        // If we have a nested object, recurse to get to the next layer
        else {
          let result = objectCompare(obj1[key], obj2[key])
          if (result === false) {
            return false;
          }
        }
      }
    }
  }
  else if (Array.isArray(obj1)) {
    //Fail fast and make sure both arrays have the same length
    if (obj1.length !== obj2.length) {
      return false;
    }
    for (let i = 0; i < obj1.length; i++) {
      if (typeof obj1[i] !== "object") {
        if (obj1[i] !== obj2[i]) {
          return false;
        }
        else {
          continue;
        }
      }
      // If we have a nested object, recurse to get to the next layer
      else {
        let result = objectCompare(obj1[i], obj2[i]);
        if (result === false) {
          return false;
        }
      }
    }
  }
  //Base case is essentially the end of whichever loop we're in. If we make
  // it through that without returning false at any of the inequality checks,
  // the objects' values are equal.

  return true;
}

module.exports = objectCompare;