import { getStyles, store } from "../api/index.js"

export function getCss (compact = true) {
  const styles = []

  for (const media of store.keys ()) {
    /* eslint-disable no-nested-ternary */
    styles.push (
      media ? "@media ".concat (media, compact ? "{" : " { ") : "",
      getStyles (media, compact),
      media ? compact ? "}" : " }" : ""
    )
    /* eslint-enable no-nested-ternary */
  }

  return styles.join ("")
}
