import { parseFallbacks } from "./parse-fallbacks.js"
import { parseFontFace } from "./parse-font-face.js"
import { parseIdentifier } from "./parse-identifier.js"
import { parseInput } from "./parse-input.js"
import { parseKeyframes } from "./parse-keyframes.js"
import { parseMedia } from "./parse-media.js"
import { parsePlaceholder } from "./parse-placeholder.js"

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
    .reduce (function (styles, style) {
      return styles.concat (parseKeyframes (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parsePlaceholder (style))
    }, [])
}
