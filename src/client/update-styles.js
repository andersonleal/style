import { debounce, getStyleElement, getStyles } from "../api/index.js"

/* istanbul ignore next */

export const updateStyles = debounce (function () {
  const style = getStyleElement ()
  const styles = getStyles ()

  style.innerHTML = styles
}, 25)
