import { canUseDom, getStyleElement, getStyles, store } from "../api/index.js"

/* istanbul ignore next */

export const update = (function (elements) {
  return function (params = {}) {
    store.forEach (function (_, media) {
      canUseDom &&
        window.requestAnimationFrame (function () {
          const styles = getStyles (media)

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
