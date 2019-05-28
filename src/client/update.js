import {
  canUseDom,
  debounce,
  getStyleElement,
  getStyles,
  insertRule
} from "../api/index.js"

/* istanbul ignore next */

export function update (params = {}) {
  canUseDom &&
    debounce (function () {
      const style = getStyleElement ()
      const styles = getStyles ()

      style.innerHTML = styles
    })

  return insertRule (params)
}
