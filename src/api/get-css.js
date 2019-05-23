import { getStyles, store } from "../api/index.js"

export function getCss () {
  const styles = []

  for (const media of store.keys ()) {
    styles.push (
      media ? "@media ".concat (media, "{") : "",
      getStyles (media),
      media ? "}" : ""
    )
  }

  return styles.join ("")
}
