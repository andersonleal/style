import { canUseDom, getStyle, getStyleElement, isDef } from "../api/index.js"

/* istanbul ignore next */

export function insertRule (params = {}) {
  if (canUseDom) {
    const sheet = getStyleElement ().sheet
    const style = getStyle (params, true)

    if (isDef (sheet) && style) {
      // const rules = Array.prototype.slice
      //   .call (sheet.cssRules)
      //   .map (({ cssText }) => cssText.replace (/[\n ]+/gu, ""))
      //   .concat (style.replace (/[\n ]+/gu, ""))
      //   .sort ()
      //
      // const index = rules.indexOf (style.replace (/[\n ]+/gu, ""))
      //
      // sheet.insertRule (style, index)
      sheet.insertRule (style, sheet.cssRules.length)
    }
  }

  return params
}
