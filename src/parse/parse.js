import { parseFallbacks } from "./parse-fallbacks.js"
import { parseFontFace } from "./parse-font-face.js"
import { parseIdentifier } from "./parse-identifier.js"
import { parseInput } from "./parse-input.js"
import { parseMedia } from "./parse-media.js"

export function parse (params = {}) {
  return parseInput (params)
    .reduce (function (styles, style) {
      return styles.concat (parseIdentifier (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parseMedia (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parseFallbacks (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parseFontFace (style))
    }, [])
}
