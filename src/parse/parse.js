import { parseInput } from "./parse-input.js"
import { parseIdentifier } from "./parse-identifier.js"

export function parse (params = {}) {
  return parseInput (params).reduce (function (styles, style) {
    return styles.concat (parseIdentifier (style))
  }, [])
}
