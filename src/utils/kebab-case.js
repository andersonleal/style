/**
 * Converts `string` to kebab case.
 *
 * @param {string} string
 * - The string to convert.
 *
 * @returns {string}
 *   The kebab cased string.
 */

export function kebabCase (string = "") {
  return string.replace (/[A-Z]|^ms/gu, "-$&").toLowerCase ()
}
