/**
 * @param {string} selectors
 * - String identifying the elements to which a set of CSS rulesets apply.
 *
 * @returns {?RegExpMatchArray}
 */

export function getSelectors (selectors = "") {
  const identifier =
    "-?[A-Z_a-z\\u{00a0}-\\u{ffff}]+[-0-9A-Z_a-z\\u{00a0}-\\u{ffff}]*"

  const regex = new RegExp (
    [
      "(&)",

      "(#".concat (identifier, ")"),

      "(\\.".concat (identifier, ")"),
      "(\\$".concat (identifier, ")"),
      "(%".concat (identifier, ")"),
      "(\\^".concat (identifier, ")"),
      "(\\[[-$*0-9=A-Z^_a-z|~\\u{00a0}-\\u{ffff}]+\\])",
      "(::?".concat (identifier, ")"),

      "(".concat (identifier, ")"),

      "(\\*)",

      "([ +>~]+)"
    ].join ("|"),
    "gu"
  )

  return selectors.split (",").map (function (selector) {
    return selector
      .trim ()
      .match (regex)
      .map (function (str) {
        return str.trim ().replace (/^$/u, " ")
      })
  })
}
