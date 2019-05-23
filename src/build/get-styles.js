import { getBlockString, getSelectorsString, store } from "../api/index.js"

export function getStyles (media = "", compact = true) {
  const styles = []

  store.get (media).forEach (function (style) {
    if (!(/^%/u).test (style.property)) {
      styles.push (
        "".concat (
          getSelectorsString (style, compact),
          compact ? "{" : " { ",
          getBlockString (style, compact),
          compact ? "}" : " }"
        )
      )
    }
  })

  return styles.sort ().join (compact ? "" : "\n")
}
