import { camelCase, isDef, kebabCase, toPairs } from "../api/index.js"

export function parseInput (params = {}) {
  const emit = isDef (params.emit) ? params.emit : true
  const input = params.input || {}
  const media = params.media || ""
  const selectors = params.selectors || []

  return toPairs (input).reduce (function (styles, style) {
    const property = style[0]
    const value = style[1]

    return styles.concat ({
      "block": [
        {
          [kebabCase (property)]: value
        }
      ],
      "emit": emit,
      "input": {
        [property]: value
      },
      "media": media,
      "property": camelCase (property),
      "selectors": selectors,
      "value": value
    })
  }, [])
}
