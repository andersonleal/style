import { canUseDom, getStyle, getStyleElement, isDef } from "../api/index.js"

/* istanbul ignore next */

export function insertRule (params = {}) {
  if (canUseDom) {
    const sheet = getStyleElement ().sheet
    const style = getStyle (params, true)

    if (isDef (sheet) && style) {
      const rules = Array.prototype.slice
        .call (sheet.cssRules)
        .map (({ cssText }) => cssText)
        .concat (style)
        .sort ()

      const index = rules.indexOf (style)

      sheet.insertRule (style, index)
    }
  }

  return params
}
