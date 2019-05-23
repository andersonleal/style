import { getBlockString, getSelectorsString, store } from "../api/index.js"

export function getStyles (media = "") {
  const styles = []

  store.get (media).forEach (function (style) {
    if (!(/^%/u).test (style.property)) {
      styles.push (
        "".concat (getSelectorsString (style), "{", getBlockString (style), "}")
      )
    }
  })

  return styles.sort ().join ("")
}
