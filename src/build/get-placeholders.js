import { parseIdentifier } from "../parse/parse-identifier.js"

export function getPlaceholders (selectors = []) {
  return selectors.map (function (selector) {
    return (/^%/u).test (selector)
      ? ".".concat (
        parseIdentifier ({
          "property": selector,
          "value": selector
        }).identifier
      )
      : selector
  })
}
