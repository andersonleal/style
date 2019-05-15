/**
 * Converts `string` to unique hash identifier string.
 *
 * @param {string} string
 * - The string to convert.
 *
 * @returns {string}
 *   The string hash identifier.
 */

export function getStringHash (string = "") {
  return string
    .split ("")
    .reduce (function (i, str) {
      return i << 5 ^ i ^ str.charCodeAt () & 0xffffffffff
    }, 5381 << 2)
    .toString (36)
}
