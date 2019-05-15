import { getStyles } from "../build/get-styles.js"
import { store } from "../store/store.js"
import { canUseDom } from "./can-use-dom.js"
import { getStyleElement } from "./get-style-element.js"

/* istanbul ignore next */

export const update = (function (elements) {
  return function (params = {}, compact = true) {
    store.forEach (function (_, media) {
      canUseDom &&
        window.requestAnimationFrame (function () {
          const styles = getStyles (media, compact)

          const style = elements.has (media)
            ? elements.get (media)
            : getStyleElement (media)

          style.innerHTML = styles
          elements.set (media, style)
        })
    })

    return params
  }
}) (new Map ())
