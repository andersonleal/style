/**
 * Converts `string` to camel case.
 *
 * @param {string} string
 * - The string to convert.
 *
 * @returns {string}
 *   The camel cased string.
 */

export function camelCase (string = "") {
  return string.replace (/\x2D([a-z])/gu, function (_, a) {
    return a.toUpperCase ()
  })
}
