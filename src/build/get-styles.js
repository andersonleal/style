import { store } from "../store/store.js"
import { getBlockString } from "./get-block-string.js"
import { getSelectorsString } from "./get-selectors-string.js"

export function getStyles (media = "", compact = true) {
  const styles = []

  store.get (media).forEach (function (style) {
    styles.push (
      "".concat (
        getSelectorsString (style, compact),
        compact ? "{" : " { ",
        getBlockString (style, compact),
        compact ? "}" : " }"
      )
    )
  })

  return styles.join (compact ? "" : "\n")
}
