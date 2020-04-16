import { css, isFunc, isObj, toPairs } from "./index.js"

export function create (params = {}) {
  return toPairs (params).reduce (function (styles, style) {
    const property = style[0]
    const value = style[1]

    if (isFunc (value)) {
      styles[property] = value
    }

    if (isObj (value)) {
      styles[property] = css (value)
    }

    return styles
  }, {})
}
