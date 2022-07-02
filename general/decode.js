"use strict";

/**
 * Accepts a string coded in a particular way and returns the
 * decoded version of that string.
 */
function decode(encrypted) {
  // first character is always an integer skip digit
  let skipDigit = +encrypted[0];
  let decoded = "";

  for (let i = 0; i < encrypted.length; i++) {
    i += +skipDigit + 1;
    decoded += encrypted[i];
    skipDigit = encrypted[i + 1];
  }

  return decoded;
}

module.exports = decode;
