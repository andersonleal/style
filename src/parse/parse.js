import {
  parseFallbacks,
  parseFontFace,
  parseIdentifier,
  parseInput,
  parseKeyframes,
  parseMedia,
  parseNumbers,
  parsePlaceholder,
  parseSelectors,
  parseTypeSelector
} from "../api/index.js"

export function parse (params = {}) {
  return parseInput (params)
    .reduce (function (styles, style) {
      return styles.concat (parseNumbers (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parseMedia (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parsePlaceholder (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parseSelectors (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parseIdentifier (style))
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
      return styles.concat (parseTypeSelector (style))
    }, [])
}
