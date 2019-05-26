import { canUseDom, getStyle, getStyleElement, isDef } from "../api/index.js"

/* istanbul ignore next */

export function insertRule (params = {}) {
  if (canUseDom) {
    const sheet = getStyleElement ().sheet
    const style = getStyle (params, true)

    if (isDef (sheet) && style) {
      sheet.insertRule (style, sheet.cssRules.length)
    }
  }

  return params
}
